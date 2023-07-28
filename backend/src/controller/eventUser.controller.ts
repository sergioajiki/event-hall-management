import { Request, Response } from 'express';
import maptStatusHTTP from '../utils/mapStatusHTTP';
import EventUserService from '../service/eventUser.service';

export default class EventUserController {
  constructor(
    private eventUserService = new EventUserService(),
  ) {}

  public async createSubscription(req: Request, res: Response): Promise<Response> {
    const { idEvent} = req.params;
    const {email} = req.body;
    const response = await this.eventUserService.createSubscription(+idEvent, email);
    return res.status(maptStatusHTTP(response.status)).json(response.data)
  }
  
}
