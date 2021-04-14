import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import isAdmin from '../middlewares/isAdmin';

import PacienteController from '../controllers/PacienteController';

const pacienteController = new PacienteController();
const pacienteRouter = Router();

pacienteRouter.use(authMiddleware);
pacienteRouter.post('/create', isAdmin, pacienteController.create);

export default pacienteRouter;
