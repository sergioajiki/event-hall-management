import { Request, Response } from 'express';
import EventService from '../service/event.service';
import maptStatusHTTP from '../utils/mapStatusHTTP';

export default class EventController {
  constructor(
    private eventService = new EventService(),
  ) {}
  public async getAllEvents(_req: Request, res: Response): Promise<Response> {
    const allEvents = await this.eventService.getAllEvents();
    return res.status(200).json(allEvents.data)
  }
  public async getOpenvents(_req: Request, res: Response): Promise<Response> {
    console.log('aqui');
    
    const openEvents = await this.eventService.getOpenEvents();
    return res.status(200).json(openEvents.data)
  }
}
