import { Router } from 'express';

import authMiddleware from '../middlewares/authMiddleware';

import UsuarioController from '../controllers/UsuarioController';

const usuarioRouter = Router();

usuarioRouter.post('/create', UsuarioController.create);
usuarioRouter.get('/', authMiddleware, UsuarioController.index);

export default usuarioRouter;