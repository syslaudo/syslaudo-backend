import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import UsuarioController from '../controllers/UsuarioController';

const usuarioController = new UsuarioController();
const usuarioRouter = Router();

usuarioRouter.post('/criar', usuarioController.criarUsuario);
usuarioRouter.use(authMiddleware);
usuarioRouter.get('/listarIdUsuario', usuarioController.listarUserID);
usuarioRouter.get('/listarUsuarios', usuarioController.listarUsuarios);
usuarioRouter.put('/atualizar', usuarioController.atualizar);
usuarioRouter.delete('/deletar', usuarioController.deletar);

export default usuarioRouter;
