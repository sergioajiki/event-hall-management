import { Request, Response, Router } from 'express';
import EventController from '../controller/event.controller';

const router = Router();
const eventController = new EventController();

router.get(
  '/event',
  (req: Request, res: Response) => res.json({ message: 'Preparando endpoint de Eventos' }),
)

router.get(
  '/event/open',
  (req: Request, res: Response) => eventController.getOpenvents(req, res),
)

router.get(
  '/event/private',
  (req: Request, res: Response) => eventController.getAllEvents(req, res),
)
export default router;