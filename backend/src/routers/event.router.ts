import { Request, Response, Router } from 'express';
import EventController from '../controller/event.controller';
import ValidationEvent from '../midllewares/validationsEvent';

const eventController = new EventController();
const router = Router();

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

router.get(
  '/event/:id',
  (req: Request, res: Response) => eventController.getEventsById(req, res),
)

router.post(
  '/event',
  ValidationEvent.validateCreateEventFields,
  ValidationEvent.validateEventType,
  (req: Request, res: Response) => eventController.createEvent(req, res),
)
export default router;