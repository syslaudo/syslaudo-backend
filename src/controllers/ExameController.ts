import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import Exame from '../models/Exame';
import Paciente from '../models/Paciente';
import gerarPassword from '../util/gerarSenha';

const schemaExame = yup.object().shape({
  data_realizacao: yup
    .string()
    .default(undefined)
    .required('A data é requerida.'),
  cpf: yup.string().max(11).required('CPF é requerido.'),
  type: yup.string().required('O tipo de exame é requerido.'),
  status: yup.string().required('O status é requerido.'),
  hipotese: yup.string().required('A hipótese é requerida.'),
  image: yup.string(),
  report: yup.string(),
  report_status: yup.string(),
});

export default class UsuarioController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      data_realizacao,
      cpf,
      type,
      status,
      hipotese,
      image,
      report,
      report_status,
    } = req.body;

    try {
      await schemaExame.validate({
        data_realizacao,
        cpf,
        type,
        status,
        hipotese,
        image,
        report,
        report_status,
      });

      const repository = getRepository(Exame);
      const exameExists = await repository.findOne({ where: { cpf: cpf } });

      if (exameExists?.status === 'Agendado') {
        return res
          .status(409)
          .json({ message: 'Já existe um exame em solicitação.' });
      }

      const senha = gerarPassword();

      const exame = repository.create({
        data_realizacao,
        cpf,
        senha,
        type,
        status,
        hipotese,
        image,
        report,
        report_status,
      });
      await repository.save(exame);

      return res.json(exame);
    } catch (error) {
      console.log(error);
      if (error instanceof yup.ValidationError) {
        console.log(yup.ValidationError);
        return res.status(400).json({ message: error.message });
      }

      return res.status(500).json({ message: error.message });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { cpf } = req.body;

    try {
      const exame = await getRepository(Exame).find({
        where: { cpf: cpf },
      });

      if (exame.length == 0) {
        return res.status(404).json({ message: 'Nenhum exame encontrado!' });
      }

      return res.json(exame);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  public async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const exame = await getRepository(Exame).find();

      return res.json(exame);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
      data_realizacao,
      cpf,
      type,
      status,
      hipotese,
      image,
      report,
      report_status,
    } = req.body;

    try {
      await schemaExame.validate({
        data_realizacao,
        cpf,
        type,
        status,
        hipotese,
        image,
        report,
        report_status,
      });

      const repository = await getRepository(Exame).update(id, req.body);

      if (repository.affected === 1) {
        const repositoryAtualizado = await getRepository(Exame).findOne(id);
        return res.status(200).json(repositoryAtualizado);
      }

      return res.status(404).json({ message: 'Exame não encontrado' });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return res.status(400).json({ message: error.message });
      }

      return res.status(500).json({ message: error.message });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const repository = getRepository(Exame);
      await repository.delete(id);

      return res.status(201).json({ message: 'Exame deletado com sucesso!' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  public async getResult(req: Request, res: Response): Promise<Response> {
    const { cpf, senha } = req.body;

    const repository = getRepository(Exame);
    const isValidCredentials = await repository.findOne({
      where: { cpf: cpf } && { senha: senha },
    });

    if (isValidCredentials?.senha !== senha) {
      return res.status(400).json({ message: 'Senha do exame invalida!' });
    }

    if (isValidCredentials?.cpf !== cpf) {
      return res.status(400).json({ message: 'CPF invalido!' });
    }

    const repositoryPaciente = getRepository(Paciente);
    const nomePaciente = await repositoryPaciente.findOne({
      where: { cpf: cpf },
    });

    const resultadoExameObj = {
      nome: nomePaciente?.nome_paciente,
      cpf: isValidCredentials?.cpf,
      data_realizacao: isValidCredentials?.data_realizacao,
      type: isValidCredentials?.type,
      status: isValidCredentials?.status,
      hipotese: isValidCredentials?.hipotese,
      report: isValidCredentials?.report,
      image: isValidCredentials?.image,
    };
    return res.json(resultadoExameObj);
  }

  public async getAgendados(req: Request, res: Response): Promise<Response> {
    const repository = await getRepository(Exame).find();
    const array = [];

    for (let i = 0; i < repository.length; i++) {
      if (repository[i].status === 'Agendado') {
        array.push(repository[i]);
      }
    }

    return res.json(array);
  }

  public async getCancelados(req: Request, res: Response): Promise<Response> {
    const repository = await getRepository(Exame).find();
    const array = [];

    for (let i = 0; i < repository.length; i++) {
      if (repository[i].status === 'Cancelado') {
        array.push(repository[i]);
      }
    }

    return res.json(array);
  }

  public async getFinalizados(req: Request, res: Response): Promise<Response> {
    const repository = await getRepository(Exame).find();
    const array = [];

    for (let i = 0; i < repository.length; i++) {
      if (
        repository[i].status === 'Concluído' &&
        repository[i].report_status === 'Concluído'
      ) {
        array.push(repository[i]);
      }
    }

    return res.json(array);
  }

  public async getLaudoPendente(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const repository = await getRepository(Exame).find();
    const array = [];

    for (let i = 0; i < repository.length; i++) {
      if (
        repository[i].status === 'Concluído' &&
        repository[i].report_status === 'Aguardando laudo'
      ) {
        array.push(repository[i]);
      }
    }

    return res.json(array);
  }

  public async getLaudoProvisorio(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const repository = await getRepository(Exame).find();
    const array = [];

    for (let i = 0; i < repository.length; i++) {
      if (
        repository[i].status === 'Concluído' &&
        repository[i].report_status === 'Provisório'
      ) {
        array.push(repository[i]);
      }
    }

    return res.json(array);
  }
}
