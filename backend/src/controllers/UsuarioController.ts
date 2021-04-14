import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import * as yup from 'yup';

import Usuario from '../models/Usuario';

const schemaUsuario = yup.object().shape({
  nome_do_usuario: yup.string().required('Nome é requerido!'),
  email_usuario: yup
    .string()
    .email('Insira um email valido! Ex:exemple@exemple.com')
    .required('Email é requerido!'),
  senha: yup.string().min(6).required('Senha é requerida!'),
  tipo: yup.string().required('Tipo é requerido'),
  cpf: yup.string().max(11).required('CPF é requerido'),
  crm: yup.string().default(null).notRequired().max(10),
  titulacao: yup.string().default(null).notRequired(),
  data_residencia: yup.string().default(undefined).notRequired(),
});

export default class UsuarioController {
  public async listUserId(req: Request, res: Response): Promise<Response> {
    return res.send({ userID: req.userId });
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const {
      nome_do_usuario,
      email_usuario,
      senha,
      tipo,
      cpf,
      crm,
      titulacao,
      data_residencia,
    } = req.body;

    try {
      await schemaUsuario.validate({
        nome_do_usuario,
        email_usuario,
        senha,
        tipo,
        cpf,
        crm,
        titulacao,
        data_residencia,
      });

      const repository = getRepository(Usuario);

      const userExists = await repository.findOne({ where: { email_usuario } });

      if (userExists) {
        return res.status(409).json({ message: 'Email já existente.' });
      }

      const usuario = repository.create({
        nome_do_usuario,
        email_usuario,
        senha,
        tipo,
        cpf,
        crm,
        titulacao,
        data_residencia,
      });
      await repository.save(usuario);

      return res.json(usuario);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        console.log(yup.ValidationError);
        return res.status(400).json({ message: error.message });
      }

      return res.status(500).json({ message: error.message });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const user = await getRepository(Usuario).find({
        where: { id: req.userId },
      });

      if (user.length == 0) {
        return res.status(404).json({ message: 'Nenhum usúario encontrado!' });
      }

      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  public async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const users = await getRepository(Usuario).find();

      if (users.length == 0) {
        return res.status(404).json({ message: 'Nenhum usúario encontrado!' });
      }

      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
      nome_do_usuario,
      email_usuario,
      senha,
      tipo,
      cpf,
      crm,
      titulacao,
      data_residencia,
    } = req.body;

    const updatedUser = {
      nome_do_usuario,
      email_usuario,
      senha: bcrypt.hashSync(senha, 8),
      tipo,
      cpf,
      crm,
      titulacao,
      data_residencia,
    };

    try {
      await schemaUsuario.validate(updatedUser);

      const repository = await getRepository(Usuario).update(id, updatedUser);

      if (repository.affected === 1) {
        const repositoryAtualizado = await getRepository(Usuario).findOne(
          req.userId,
        );
        return res.status(200).json(repositoryAtualizado);
      }

      return res.status(404).json({ message: 'Usúario não encontrado' });
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
      const repository = getRepository(Usuario);
      await repository.delete(id);

      return res.status(201).json({ message: 'Usúario deletado com sucesso!' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
