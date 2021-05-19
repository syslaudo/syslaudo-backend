import { Router } from 'express';

import AuthController from '../controllers/AuthController';

const authController = new AuthController();
const sessionRouter = Router();

sessionRouter.post('/login', authController.authenticate);

export default sessionRouter;
