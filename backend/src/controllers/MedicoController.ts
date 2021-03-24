import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import jwt from 'jsonwebtoken';

import Usuario from '../models/Usuario';
import modelMedico from '../models/Medico';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

const schemaMedico = yup.object().shape({
  crm: yup.string().min(4).max(10).required("Insira um CRM válido!"),
  ativo: yup.boolean().required("true: ativo / false: inativo"),
  paraUsuarioSolicitando: yup.boolean().required("Insira um usuario válido")
});

class Medico {
  async create(req: Request, res: Response) {
    try {
      const { crm, ativo, paraUsuarioSolicitando } = req.body;
      await schemaMedico.validate({ crm, ativo, paraUsuarioSolicitando });

      if(paraUsuarioSolicitando === 'sim') {
        const { authorization } = req.headers;
        
        if(!authorization) {
          return res.status(401).json({ message: 'Token inválido'});
        }

        const token = authorization.replace('Bearer', '').trim();
        const data = jwt.verify(token, `${process.env.APP_SECRET}`);
        
        const { id } = data as TokenPayload;
        req.userId = id;

        try {
          const repository = getRepository(Usuario);
          const repositoryMedico = getRepository(modelMedico);

          const userExists = await repository.findOne({ where: { id } });
          
          if(userExists) {
            res.status(404).json({ message: "Usúario não encontrado."})
          }
          
          const medico = repositoryMedico.create({ crm, ativo,  });
          await repositoryMedico.save(medico);

          return res.json(medico);
        } catch (error) {
          console.log(error)
        }

      }

    } catch (error) {
      console.log(error)
    }
  }
}

export default new Medico();