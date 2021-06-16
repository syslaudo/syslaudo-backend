import { Router } from 'express';

import usuarioRoutes from './usuario.routes';
import sessionRoutes from './session.routes';
import pacienteRoutes from './paciente.routes';
import recomendacaoRoutes from './recomendacao.routes';
import exameRoutes from './exame.routes';

const router = Router();

// ROTA PARA CRIAR, LISTAR, EDITAR E APAGAR USÚARIO;
router.use('/usuario', usuarioRoutes);

// ROTA PARA INICIAR SESSÃO;
router.use('/session', sessionRoutes);

// ROTA PARA CRIAR, LISTAR, EDITAR E APAGAR PACIENTE;
router.use('/paciente', pacienteRoutes);

// ROTA PARA CRIAR, LISTAR, EDITAR E APAGAR RECOMENDAÇÕES;
router.use('/recomendacao', recomendacaoRoutes);

// ROTA PARA CRIAR, LISTAR, EDITAR E APAGAR EXAMES;
router.use('/exame', exameRoutes);

export default router;
