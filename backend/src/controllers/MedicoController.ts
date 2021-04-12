import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';

import Usuario from '../models/Usuario';
import Medico from '../models/Medico';

const schemaMedico = yup.object().shape({
  crm: yup.string().min(4).max(10).required('Insira um CRM válido!'),
  ativo: yup.boolean().required('true: ativo / false: inativo'),
  emailUsuarioSolicitado: yup
    .string()
    .email('Insira um email valido! Ex:exemple@exemple.com')
    .required('Email é requerido!'),
  cpf: yup.string().max(11).required('Insira um CPF válido! Max(11) digitos.'),
});

export default class MedicoController {
  async criar(req: Request, res: Response): Promise<Response> {
    try {
      const { crm, ativo, cpf, emailUsuarioSolicitado } = req.body;
      await schemaMedico.validate({ crm, ativo, cpf, emailUsuarioSolicitado });

      const repository = getRepository(Usuario);

      const userExists = await repository.findOne({
        where: { email_usuario: emailUsuarioSolicitado },
      });
      const id = userExists?.id
      
      if (userExists) {
        res.status(409).json({ message: 'Email já existente.' });
      }

      if (!userExists) {
        res.status(404).json({ message: 'Email não existe.' });
      }

      const repositoryMedico = getRepository(Medico);

      const medico = repositoryMedico.create({ crm, ativo, id, cpf });
      await repositoryMedico.save(medico);

      return res.json(medico)
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }
}
