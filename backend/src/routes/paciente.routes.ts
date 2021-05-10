import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import isAdmin from '../middlewares/isAdmin';

import PacienteController from '../controllers/PacienteController';

const pacienteController = new PacienteController();
const pacienteRouter = Router();

pacienteRouter.use(authMiddleware);
pacienteRouter.post('/create', pacienteController.create);
pacienteRouter.get('/show', pacienteController.show);
pacienteRouter.get('/listAll', pacienteController.listAll);
pacienteRouter.put('/update/:id', pacienteController.update);
pacienteRouter.delete('/delete/:id', pacienteController.delete);

export default pacienteRouter;
