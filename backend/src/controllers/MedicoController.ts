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
});

export default class MedicoController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { crm, ativo, emailUsuarioSolicitado } = req.body;
      await schemaMedico.validate({ crm, ativo, emailUsuarioSolicitado });

      const repository = getRepository(Usuario);
      const userExists = await repository.findOne({
        where: { email_usuario: emailUsuarioSolicitado },
      });

      if (!userExists) {
        res.status(404).json({ message: 'Email não existe.' });
      }

      const repositoryMedico = getRepository(Medico);

      const medicoRelacao = await repositoryMedico.find({
        relations: ['usuarios.id'],
      });
      console.log(medicoRelacao);

      const medico = await repositoryMedico.create({ crm, ativo });
      await repositoryMedico.save(medico);
    } catch (error) {
      console.log(error);
    }
  }
}
