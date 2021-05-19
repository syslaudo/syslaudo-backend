import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import isAdmin from '../middlewares/isAdmin';
import UsuarioController from '../controllers/UsuarioController';

const usuarioController = new UsuarioController();
const usuarioRouter = Router();

usuarioRouter.post('/create', usuarioController.create);
usuarioRouter.use(authMiddleware, isAdmin);
usuarioRouter.get('/listIdUser', usuarioController.listUserId);
usuarioRouter.get('/show', usuarioController.show);
usuarioRouter.get('/listAll', usuarioController.listAll);
usuarioRouter.put('/update/:id', usuarioController.update);
usuarioRouter.delete('/delete/:id', usuarioController.delete);

export default usuarioRouter;
