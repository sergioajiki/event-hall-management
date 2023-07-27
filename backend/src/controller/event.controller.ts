import { Request, Response } from 'express';
import EventService from '../service/event.service';
import maptStatusHTTP from '../utils/mapStatusHTTP';

export default class EventController {
  constructor(
    private eventService = new EventService(),
  ) {}

  public async getAllEvents(_req: Request, res: Response): Promise<Response> {
    const allEvents = await this.eventService.getAllEvents();
    return res.status(maptStatusHTTP(allEvents.status)).json(allEvents.data)
  }

  public async getOpenvents(_req: Request, res: Response): Promise<Response> {
    const openEvents = await this.eventService.getOpenEvents();
    return res.status(maptStatusHTTP(openEvents.status)).json(openEvents.data)
  }

  public async getEventsById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const eventById = await this.eventService.getEventsById(+id);
    return res.status(maptStatusHTTP(eventById.status)).json(eventById.data)
  }

  public async createEvent(req: Request, res: Response): Promise<Response> {
    const payload = req.body;
    const response = await this.eventService.createEvent(payload);
    return res.status(maptStatusHTTP(response.status)).json(response.data)
  }
  
  public async updateEventById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const payload = req.body;
    const response = await this.eventService.updateEventById(+id, payload);
    return res.status(maptStatusHTTP(response.status)).json(response.data)
  }
}
