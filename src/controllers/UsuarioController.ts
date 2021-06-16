import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as yup from 'yup';

import nodemailer from 'nodemailer';
// import SMTP_CONFIG from '../config/smtp';

import Usuario from '../models/Usuario';
import AppError from '../errors/AppError';

const schemaUsuario = yup.object().shape({
  nome_do_usuario: yup.string().required('Nome é requerido!'),
  email_usuario: yup
    .string()
    .email('Insira um email valido! Ex:exemple@exemple.com')
    .required('Email é requerido!'),
  senha: yup.string().min(6),
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
      tipo,
      cpf,
      crm,
      titulacao,
      data_residencia,
    } = req.body;

    const updatedUser = {
      nome_do_usuario,
      email_usuario,
      tipo,
      cpf,
      crm,
      titulacao,
      data_residencia,
    };

    if (req.body.senha) {
      Object.assign(updatedUser, { senha: bcrypt.hashSync(req.body.senha, 8) });
    }

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

  public async forgotPassword(req: Request, res: Response): Promise<Response> {
    const { email_usuario } = req.body;
    try {
      const usuarioRepository = getRepository(Usuario);
      const usuario = await usuarioRepository.find({
        where: { email_usuario },
      });

      if (!usuario) {
        return res
          .status(400)
          .json({ message: 'Email não encontrado na base de dados.' });
      }

      const payload = {
        id: usuario[0].id,
        email: usuario[0].email_usuario,
      };

      const token = jwt.sign(
        { id: payload.id },
        `${process.env.RESET_PASSWORD_KEY}`,
        { expiresIn: '2h' },
      );

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: `${process.env.USER_SMTP}`,
          pass: `${process.env.PASS_SMTP}`,
        },
      });

      transporter
        .sendMail({
          from: `${process.env.USER_SMTP}`,
          to: email_usuario,
          subject: 'Reset your password link',
          html: `
          <h2>Please click on given link to reset your password</h2>
          <p>${process.env.CLIENT_URL}/session/reset-password/${payload.id}/${token}</p>
        `,
        })
        .then()
        .catch((err) => {
          throw new Error(err);
        });
      return res.status(200).json({
        message: 'Foi enviado algumas instruções para você recuperar seu email',
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  public async resetPassword(req: Request, res: Response): Promise<Response> {
    const { id, token } = req.params;
    const { password, passwordConfirmation } = req.body;

    if (password !== passwordConfirmation) {
      return res
        .status(400)
        .json({ message: 'As senhas informadas não conferem.' });
    }

    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.find({
      where: { id },
    });
    const JWT_SECRET = `${process.env.RESET_PASSWORD_KEY}`;

    if (id !== usuario[0].id) {
      return res.status(400).json({ message: 'ID invalido.' });
    }

    const secret = JWT_SECRET;

    try {
      await jwt.verify(token, secret);
      const newPassword = bcrypt.hashSync(req.body.password, 8);
      await getRepository(Usuario).update(
        { senha: usuario[0].senha },
        { senha: newPassword },
      );

      return res.status(201).json({ message: 'Senha alterada com sucesso.' });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
