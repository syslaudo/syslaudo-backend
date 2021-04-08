import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import UsuarioController from '../controllers/UsuarioController';

const usuarioRouter = Router();

const usuarioController = new UsuarioController();

usuarioRouter.post('/criar', usuarioController.criarUsuario);
usuarioRouter.use(authMiddleware);
usuarioRouter.get('/listarIdUsuario', usuarioController.listarUserID);
usuarioRouter.get('/listarUsuarios', usuarioController.listarUsuarios);
usuarioRouter.put('/atualizar', usuarioController.atualizar);
usuarioRouter.delete('/deletar', usuarioController.deletar);

export default usuarioRouter;
