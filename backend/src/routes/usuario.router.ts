import { Router } from 'express';

import UsuarioController from '../controllers/UsuarioController';

const usuarioController = Router();

usuarioController.post('/create', UsuarioController.create);

export default usuarioController;