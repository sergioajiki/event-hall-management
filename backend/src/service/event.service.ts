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

  public async getOpenEvents(): Promise<ServiceResponse<IEvent[]>> {
    const openEvents = await this.eventModel.getOpenEvents();
    return {
      status: 'SUCCESSFUL',
      data: openEvents,  
    }
  }

  public async getEventsById(id: number): Promise<ServiceResponse<IEvent | null>> {
    console.log('aqui no service o id é', id);
    const eventById = await this.eventModel.getEventsById(+id);
    return {
      status: 'SUCCESSFUL',
      data: eventById,  
    }
  }
}
