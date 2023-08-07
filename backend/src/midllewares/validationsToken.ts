import { NextFunction, Request, Response } from 'express';
import Jwtoken from '../utils/jwtUtils';

const validateToken = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Must send token' });
  }
  const data = authorization.split(' ');
  const token = data[1];
  
  try {
    res.locals.user = Jwtoken.verify(token);
    next();
  } catch (err) {
    // const error = err as { message: string };
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;