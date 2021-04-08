import { Router } from 'express';
import MedicoController from '../controllers/MedicoController';

const medicoRouter = Router();
const medicoController = new MedicoController();

medicoRouter.post('/create', medicoController.create);

export default medicoRouter;
