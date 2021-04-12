import { Router } from 'express';
import MedicoController from '../controllers/MedicoController';
import authMiddleware from '../middlewares/authMiddleware';

const medicoController = new MedicoController();
const medicoRouter = Router();

medicoRouter.use(authMiddleware);
medicoRouter.post('/criar', medicoController.criar);

export default medicoRouter;
