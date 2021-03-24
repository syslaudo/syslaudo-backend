import { Router } from 'express';

import MedicoController from '../controllers/MedicoController';

const medicoRouter = Router();

medicoRouter.post('/create', MedicoController.create);

export default medicoRouter;