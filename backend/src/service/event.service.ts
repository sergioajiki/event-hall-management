import EventModel from '../model/event.model';
import { IEvent } from '../Interfaces/Events/IEvents';
import { IEventModel } from '../Interfaces/Events/IEventModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class EventService {
  constructor(
    private eventModel: IEventModel = new EventModel(),
  ) {} 

  public async getAllEvents(): Promise<ServiceResponse<IEvent[]>> {
    const allEvents = await this.eventModel.getAllEvents();
    return {
      status: 'SUCCESSFUL',
      data: allEvents,        
      }
    }
}
