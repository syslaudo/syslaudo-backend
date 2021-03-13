import { Router } from 'express';

import UsuarioController from './usuario.router';

const router = Router();

router.use('/users', UsuarioController)

export default router;