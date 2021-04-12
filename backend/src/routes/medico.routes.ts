import { Router } from 'express';
import MedicoController from '../controllers/MedicoController';
import authMiddleware from '../middlewares/authMiddleware';

const medicoController = new MedicoController();
const medicoRouter = Router();

medicoRouter.use(authMiddleware);
medicoRouter.post('/create', medicoController.criarMedico);
medicoRouter.get('/listAll', medicoController.listarMedicos);
medicoRouter.put('/update', medicoController.editar);

export default medicoRouter;
