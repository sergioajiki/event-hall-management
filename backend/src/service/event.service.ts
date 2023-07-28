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
  public async updateEventById(id: number, eventPayload: IEventPayload)
  : Promise<ServiceResponse<IEvent | number>> {
    const isEvent = await this.eventModel.getEventsById(+id);
    if (!isEvent){
      return { status: 'NOT_FOUND', data: { message: 'Event not found' } };
    }  
    await this.eventModel.updateEventById(+id, eventPayload);
    return { status: 'CREATE', data: { message: 'Evento foi atualizado' } };
  }
  
  public async deleteEventById(id: number)
  : Promise<ServiceResponse<ServiceMessage>> {
    const isEvent = await this.eventModel.getEventsById(+id);
    if (!isEvent){
      return { status: 'NOT_FOUND', data: { message: 'Event not found' } };
    }
    await this.eventModel.deleteEventById(+id);
    return { status: 'SUCCESSFUL', data: { message: 'Evento foi apagado' } };
  }
}
