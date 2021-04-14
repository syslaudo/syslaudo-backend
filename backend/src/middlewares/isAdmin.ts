import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import Usuario from '../models/Usuario';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function isAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const usuario = await getRepository(Usuario).findOne({
    where: { id: req.userId },
  });

  if (usuario?.tipo != 'Administrativo') {
    return res.status(409).json({ message: 'Você não é Administrador' });
  }
  next();
}
