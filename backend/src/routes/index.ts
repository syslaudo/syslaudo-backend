import { Router } from 'express';

import usuarioRoutes from './usuario.routes';
import sessionRoutes from './session.routes';
import medicoRoutes from './medico.routes';

const router = Router();

// ROTA PARA CRIAR, LISTAR E APAGAR USÚARIO;
router.use('/usuario', usuarioRoutes);

// ROTA PARA INICIAR SESSÃO;
router.use('/session', sessionRoutes);

// ROTA PARA CRIAR, LISTAR E APAGAR MÉDICO;
// router.use('/medico', medicoRoutes);

export default router;
