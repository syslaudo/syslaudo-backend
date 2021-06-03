import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import Recomendacao from '../models/Recomendacao';

const schemaRecomendacao = yup.object().shape({
  exame: yup.string().required('O texto é requerido!'),
  recomendacao: yup.string().required('O texto é requerido!'),
});

export default class RecomendacaoController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { exame, recomendacao } = req.body;

    try {
      await schemaRecomendacao.validate({
        exame,
        recomendacao,
      });

      const repository = getRepository(Recomendacao);
      const recomendacaoRepository = repository.create({ exame, recomendacao });

      await repository.save(recomendacaoRepository);

      return res.json(recomendacaoRepository);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        console.log(yup.ValidationError);
        return res.status(400).json({ message: error.message });
      }

      return res.status(500).json({ message: error.message });
    }
  }
}
