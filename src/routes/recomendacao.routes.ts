import { Router } from 'express';

import RecomendacaoController from '../controllers/RecomendacaoController';

const recomendacaoController = new RecomendacaoController();
const recomendacaoRouter = Router();

recomendacaoRouter.post('/create', recomendacaoController.create);
recomendacaoRouter.post('/show', recomendacaoController.show);
recomendacaoRouter.put('/update/:id', recomendacaoController.update);
recomendacaoRouter.delete('/delete/:id', recomendacaoController.delete);

export default recomendacaoRouter;
