import { Router } from 'express';

import AuthController from '../controllers/AuthController';
import ExameController from '../controllers/AuthExameController';
import UsuarioController from '../controllers/UsuarioController';

const authController = new AuthController();
const exameController = new ExameController();
const usuarioController = new UsuarioController();

const sessionRouter = Router();

sessionRouter.post('/login', authController.authenticate);
sessionRouter.post('/forgot-password', usuarioController.forgotPassword);
sessionRouter.post(
  '/reset-password/:id/:token',
  usuarioController.resetPassword,
);

sessionRouter.post('/acesso-paciente', exameController.authenticate);

export default sessionRouter;
