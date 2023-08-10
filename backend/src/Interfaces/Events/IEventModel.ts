import { IEvent } from './IEvents';
import { IEventPayload } from './IEventPayload'
import { ServiceMessage } from '../ServiceResponse';

export interface IEventModel {
  getAllEvents(): Promise<IEvent[]>,
  getOpenEvents(): Promise<IEvent[]>
  getEventsById(id: number): Promise<IEvent | null>
  createEvent(eventPayload: IEventPayload): Promise<IEvent>
  getEventByName(eventName: string): Promise<IEvent | null>
  getEventByDate(eventDate: Date): Promise<IEvent | null>
  updateEventById(id: number, eventPayload: IEventPayload): Promise<IEvent | number>
  deleteEventById(id: number): Promise<ServiceMessage>
  getEmailByEventId(id: number): Promise<IEvent | null>

}