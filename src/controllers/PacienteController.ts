import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Paciente from '../models/Paciente';
import * as yup from 'yup';

const schemaPaciente = yup.object().shape({
  nome_paciente: yup.string().required('Nome é requerido!'),
  cpf: yup.string().max(11).required('CPF é requerido'),
  sexo_paciente: yup.string().required('Sexo é requerido!'),
  cor_paciente: yup.string().required('Cor é requerida!'),
  datanasc_paciente: yup.date().required('Data de nascimento é requerida!'),
  aguarda_realizacao: yup.boolean(),
});

export default class PacientesController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      nome_paciente,
      cpf,
      sexo_paciente,
      cor_paciente,
      datanasc_paciente,
      aguarda_realizacao,
    } = req.body;
    console.log(req.body);
    try {
      await schemaPaciente.validate({
        nome_paciente,
        cpf,
        sexo_paciente,
        cor_paciente,
        datanasc_paciente,
        aguarda_realizacao,
      });

      const repository = getRepository(Paciente);
      const pacientExists = await repository.findOne({ where: { cpf: cpf } });

      if (pacientExists) {
        return res
          .status(409)
          .json({ message: 'Já existe um Paciente cadastrado com esse CPF.' });
      }

      const paciente = repository.create({
        nome_paciente,
        cpf,
        sexo_paciente,
        cor_paciente,
        datanasc_paciente,
        aguarda_realizacao,
      });

      await repository.save(paciente);
      return res.json(paciente);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        console.log(yup.ValidationError);
        return res.status(400).json({ message: error.message });
      }

      return res.status(500).json({ message: error.message });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { nome_paciente } = req.body;

    try {
      const paciente = await getRepository(Paciente).find({
        where: { nome_paciente: nome_paciente },
      });

      if (paciente.length == 0) {
        return res.status(404).json({ message: 'Nenhum paciente encontrado!' });
      }

      return res.json(paciente);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  public async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const pacientes = await getRepository(Paciente).find();

      return res.json(pacientes);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
      nome_paciente,
      cpf,
      sexo_paciente,
      cor_paciente,
      datanasc_paciente,
      aguarda_realizacao,
    } = req.body;

    try {
      await schemaPaciente.validate({
        nome_paciente,
        cpf,
        sexo_paciente,
        cor_paciente,
        datanasc_paciente,
        aguarda_realizacao,
      });

      const repository = await getRepository(Paciente).update(id, req.body);

      if (repository.affected === 1) {
        const repositoryAtualizado = await getRepository(Paciente).findOne(id);
        return res.status(200).json(repositoryAtualizado);
      }

      return res.status(404).json({ message: 'Paciente não encontrado' });
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
      const repository = getRepository(Paciente);
      await repository.delete(id);

      return res
        .status(201)
        .json({ message: 'Paciente deletado com sucesso!' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
