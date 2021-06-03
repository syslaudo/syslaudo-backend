import { Router } from 'express';

import RecomendacaoController from '../controllers/RecomendacaoController';

const recomendacaoController = new RecomendacaoController();
const recomendacaoRouter = Router();

recomendacaoRouter.post('/create', recomendacaoController.create);

export default recomendacaoRouter;
