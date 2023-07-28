import { IEvent } from './IEvents';
import { IEventPayload } from './IEventPayload'
import { ServiceMessage } from '../ServiceResponse';
import { EventType } from '../Events/EventType'

export interface ITeste {
  id: number;
  eventName: string;
  eventDate: Date;
  eventTime: Date;
  eventType: EventType | string;
  description: string;
  users?: [];
}

export interface IEventModel {
  getAllEvents(): Promise<IEvent[]>,
  getOpenEvents(): Promise<IEvent[]>
  getEventsById(id: number): Promise<IEvent | null>
  createEvent(eventPayload: IEventPayload): Promise<IEvent>
  getEventByName(eventName: string): Promise<IEvent | null>
  getEventByDate(eventDate: Date): Promise<IEvent | null>
  updateEventById(id: number, eventPayload: IEventPayload): Promise<IEvent | number>
  deleteEventById(id: number): Promise<ServiceMessage>
  getEmailByEventId(id: number): Promise<ITeste | null>

}