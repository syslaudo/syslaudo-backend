import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import UsuarioController from '../controllers/UsuarioController';

const usuarioController = new UsuarioController();
const usuarioRouter = Router();

usuarioRouter.post('/create', usuarioController.criarUsuario);
usuarioRouter.use(authMiddleware);
usuarioRouter.get('/listIdUser', usuarioController.listarUserID);
usuarioRouter.get('/show', usuarioController.listar);
usuarioRouter.get('/listAll', usuarioController.listarUsuarios);
usuarioRouter.put('/update', usuarioController.atualizar);
usuarioRouter.delete('/delete', usuarioController.deletar);


export default usuarioRouter;
