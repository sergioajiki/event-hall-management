import { Request, Response } from 'express';
import EventService from '../service/event.service';
import maptStatusHTTP from '../utils/mapStatusHTTP';

export default class EventController {
  constructor(
    private eventService = new EventService(),
  ) {}
  public async getAllEvents (req: Request, res: Response): Promise<Response> {
    const allEvents = await this.eventService.getAllEvents();
    return res.status(maptStatusHTTP(allEvents.status)).json(allEvents.data)
  }
  public async getOpenvents (req: Request, res: Response): Promise<Response> {
    const openEvents = await this.eventService.getOpenEvents();
    return res.status(maptStatusHTTP(openEvents.status)).json(openEvents.data)
  }
}
