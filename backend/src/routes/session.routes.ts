import { Router } from 'express';

import AuthController from '../controllers/AuthController';

const sessionRouter = Router();

sessionRouter.post('/login', AuthController.authenticate);

export default sessionRouter;