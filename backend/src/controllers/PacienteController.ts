import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Paciente from '../models/Paciente';
import * as yup from 'yup';
import moment from 'moment';
import parseDateString from '../util/parseDateString';

const today = moment().format('YYYY-MM-DD HH:MM:SS');
console.log(today);
// console.log(new Date());

const schemaPaciente = yup.object().shape({
  nome_paciente: yup.string().required('Nome é requerido!'),
  sexo_paciente: yup.string().required('Sexo é requerido!'),
  cor_paciente: yup.string().required('Cor é requerida!'),
  datanasc_paciente: yup
    .date()
    .max(today)
    .required('Data de nascimento é requerida!'),
});

export default class PacientesController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      nome_paciente,
      sexo_paciente,
      cor_paciente,
      datanasc_paciente,
    } = req.body;

    try {
      await schemaPaciente.validate({
        nome_paciente,
        sexo_paciente,
        cor_paciente,
        datanasc_paciente,
      });

      const repository = getRepository(Paciente);
      const paciente = repository.create({
        nome_paciente,
        sexo_paciente,
        cor_paciente,
        datanasc_paciente,
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
}
