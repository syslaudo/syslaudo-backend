import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Exame from '../models/Exame';

const schemaExame = yup.object().shape({
  cpf: yup.string().max(11).required('CPF é requerido'),
  enha: yup.string().min(6),
});

export default class ExameAuthenticate {
  async authenticate(req: Request, res: Response): Promise<Response> {
    try {
      await schemaExame.validate(req.body);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }

    const { cpf, senha } = req.body;

    try {
      const exameRepository = getRepository(Exame);
      const exame = await exameRepository.find({
        where: { cpf },
      });

      if (!exame) {
        return res.status(401).json({ message: 'Exame não encontrado!' });
      }

      const isValidPassword = await bcrypt.compare(senha, exame[0].senha);

      if (!isValidPassword) {
        return res.status(401).json({ message: 'Senha incorreta' });
      }

      const token = jwt.sign(
        { id: exame[0].id_exame },
        `${process.env.APP_SECRET}`,
        {
          expiresIn: '1d',
        },
      );

      return res.status(200).json({ exame, token });
    } catch (error) {
      return res.status(401).json({ message: 'Usúario invalido' });
    }
  }
}
