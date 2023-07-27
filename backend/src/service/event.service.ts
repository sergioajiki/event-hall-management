import EventModel from '../model/event.model';
import { IEvent } from '../Interfaces/Events/IEvents';
import { IEventModel } from '../Interfaces/Events/IEventModel';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import { IEventPayload } from '../Interfaces/Events/IEventPayload';

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
    const eventById = await this.eventModel.getEventsById(+id);
    return {
      status: 'SUCCESSFUL',
      data: eventById,  
    }
  }

  // private async checkEventAgenda (eventName: string, eventDate: Date, eventTime: Date): Promise<boolean> {
  //   const isEventName = await this.eventModel.getEventByName(eventName);
  //   if (isEventName) {
  //     if (alreadyRegisteredEmail) {
  //       return { status: 'CONFLICT',  data: { message: 'Email já está cadastrado' } }  
  //   }
  //   }
  // }
  public async createEvent(eventPayload: IEventPayload): Promise<ServiceResponse<ServiceMessage>> {
    const {eventName, eventDate } = eventPayload
    const isEventName = await this.eventModel.getEventByName(eventName);
    if (isEventName) {
        return { status: 'CONFLICT',  data: { message: 'Evento já está cadastrado' } }  
    }
    const isEventDate = await this.eventModel.getEventByDate(eventDate);
    if (isEventDate) {
      return { status: 'CONFLICT',  data: { message: 'Dia do evento já está reservado' } }  
    }
    await this.eventModel.createEvent(eventPayload)
    return {
      status: 'CREATE',
      data: { message: 'Evento cadastrado com sucesso' }
    }

  }
}
