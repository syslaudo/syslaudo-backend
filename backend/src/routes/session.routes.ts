import { Router } from 'express';

import AuthController from '../controllers/AuthController';

const sessionRouter = Router();
const authController = new AuthController();

sessionRouter.post('/login', authController.authenticate);

export default sessionRouter;
