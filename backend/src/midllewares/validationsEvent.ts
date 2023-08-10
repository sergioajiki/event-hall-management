import { Request, Response, NextFunction } from 'express';

export default class ValidationEvent {
  static validateCreateEventFields(req: Request, res: Response, next: NextFunction)
    : Response | void {
    const { eventName , eventDate, eventTime, eventType, description } = req.body;
    if (!eventName || !eventDate || !eventTime || !eventType || !description) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    next();
  }

  static validateEventType(req: Request, res: Response, next: NextFunction)
  : Response | void {
    const { eventType } = req.body;
    if(eventType !== 'free' && eventType !== 'registered' && eventType !== 'private'){
      return res.status(400).json({ message: 'Tipo de evento inválido' });
    }
    next()
  }
}