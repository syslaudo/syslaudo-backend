import { Router } from 'express';
import MedicoController from '../controllers/MedicoController';

const medicoController = new MedicoController();
const medicoRouter = Router();

medicoRouter.post('/create', medicoController.create);

export default medicoRouter;
