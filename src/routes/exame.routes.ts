import { Router } from 'express';

import ExameController from '../controllers/ExameController';

const exameController = new ExameController();

const exameRouter = Router();

exameRouter.post('/create', exameController.create);
exameRouter.get('/show', exameController.show);
exameRouter.get('/listAll', exameController.listAll);
exameRouter.put('/update/:id', exameController.update);
exameRouter.delete('/delete/:id', exameController.delete);

export default exameRouter;
