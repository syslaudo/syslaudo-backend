import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import isAdmin from '../middlewares/isAdmin';

import PacienteController from '../controllers/PacienteController';

const pacienteController = new PacienteController();
const pacienteRouter = Router();

pacienteRouter.use(authMiddleware);
pacienteRouter.post('/create', isAdmin, pacienteController.create);
pacienteRouter.get('/show', isAdmin, pacienteController.show);
pacienteRouter.get('/listAll', isAdmin, pacienteController.listAll);
pacienteRouter.put('/update/:id', isAdmin, pacienteController.update);
pacienteRouter.delete('/delete/:id', isAdmin, pacienteController.delete);

export default pacienteRouter;
