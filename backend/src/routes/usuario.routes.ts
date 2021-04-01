import { Router } from 'express';

import authMiddleware from '../middlewares/authMiddleware';

import UsuarioController from '../controllers/UsuarioController';

const usuarioRouter = Router();

usuarioRouter.post('/criar', UsuarioController.criarUsuario);
usuarioRouter.use(authMiddleware);
usuarioRouter.get('/listarIdUsuario', UsuarioController.listarUserID);
usuarioRouter.get('/listarUsuarios', UsuarioController.listarUsuarios);
usuarioRouter.put('/atualizar', UsuarioController.atualizar);
usuarioRouter.delete('/deletar', UsuarioController.deletar);

export default usuarioRouter;