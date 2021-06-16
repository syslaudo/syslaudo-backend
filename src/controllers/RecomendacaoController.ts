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

  public async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const recomendacoes = await getRepository(Recomendacao).find();
      return res.json(recomendacoes);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { exame } = req.body;
    try {
      const repositoryExame = await getRepository(Recomendacao).find({
        where: { exame: exame },
      });

      if (repositoryExame.length == 0) {
        return res
          .status(404)
          .json({ message: 'Nenhuma recomendação encontrada!' });
      }

      return res.json(repositoryExame);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { exame, recomendacao } = req.body;

    try {
      await schemaRecomendacao.validate({ exame, recomendacao });

      const repository = await getRepository(Recomendacao).update(id, req.body);

      if (repository.affected === 1) {
        const repositoryAtualizado = await getRepository(Recomendacao).findOne(
          id,
        );
        return res.status(200).json(repositoryAtualizado);
      }

      return res.status(404).json({ message: 'Recomendação não encontrada' });
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
      const repository = getRepository(Recomendacao);
      await repository.delete(id);

      return res
        .status(201)
        .json({ message: 'Recomendacao deletado com sucesso!' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
