import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Usuario from '../models/Usuario';

const schemaUser = yup.object().shape({
  email_usuario: yup
    .string()
    .email('Insira um email valido! Ex:exemple@exemple.com')
    .required('Email é requerido!'),
  senha: yup.string().min(6).required('Senha é requerida!'),
});

export default class UsuarioController {
  async authenticate(req: Request, res: Response): Promise<Response> {
    try {
      await schemaUser.validate(req.body);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }

    const { email_usuario, senha } = req.body;

    try {
      const usuarioRepository = getRepository(Usuario);
      const usuario = await usuarioRepository.find({
        where: { email_usuario },
      });

      if (!usuario) {
        res.status(404).json({ message: 'Usúario não encontrado' });
      }

      const isValidPassword = await bcrypt.compare(senha, usuario[0].senha);

      if (!isValidPassword) {
        return res.status(401).json({ message: 'Senha incorreta' });
      }

      const token = jwt.sign(
        { id: usuario[0].id },
        `${process.env.APP_SECRET}`,
        { expiresIn: '1d' },
      );

      const user = {
        id: usuario[0].id,
        nome: usuario[0].nome_usuario,
        email_usuario: usuario[0].email_usuario,
        funcao: usuario[0].funcao,
      };

      return res.status(200).json({ user, token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
