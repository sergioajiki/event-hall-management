import { Request, Response, Router } from 'express';
import EventController from '../controller/event.controller';
import ValidationEvent from '../midllewares/validationsEvent';

const eventController = new EventController();
const router = Router();

router.get(
  '/event',
  (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,OPTIONS,PATCH,DELETE,POST,PUT'),
    eventController.getOpenvents(req, res)
  } ,
)

router.get(
  '/event/private',  
  (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,OPTIONS,PATCH,DELETE,POST,PUT'),
    eventController.getAllEvents(req, res)
  }, 
)

router.post(
  '/event',
  ValidationEvent.validateCreateEventFields,
  ValidationEvent.validateEventType,
  (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,OPTIONS,PATCH,DELETE,POST,PUT'),
    eventController.createEvent(req, res)
  },
)

router.get(
  '/event/:id',
  (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,OPTIONS,PATCH,DELETE,POST,PUT'),
    eventController.getEventsById(req, res)
  },
)

router.patch(
  '/event/:id',
  ValidationEvent.validateCreateEventFields,
  ValidationEvent.validateEventType,
  (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,OPTIONS,PATCH,DELETE,POST,PUT'),
    eventController.updateEventById(req, res)
  },
)

router.delete(
  '/event/:id',
  (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,OPTIONS,PATCH,DELETE,POST,PUT'),
    eventController.deleteEventById(req, res)
  },
)

export default router;