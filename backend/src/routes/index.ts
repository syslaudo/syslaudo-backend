import { Router } from 'express';

import usuarioRoutes from './usuario.routes';
import sessionRoutes from './session.routes';

const router = Router();

// ROTA PARA CRIAR, LISTAR E APAGAR USÚARIO;
router.use('/users', usuarioRoutes)

// ROTA PARA INICIAR SESSÃO;
router.use('/session', sessionRoutes)

export default router;