import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Você não tem autorização!' });
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, `${process.env.APP_SECRET}`);
    const { id } = data as TokenPayload;

    req.userId = id;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Você não tem autorização' });
  }
}
