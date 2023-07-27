import { IEvent } from './IEvents';
import { IEventPayload } from './IEventPayload'

export interface IEventModel {
  getAllEvents(): Promise<IEvent[]>,
  getOpenEvents(): Promise<IEvent[]>
  getEventsById(id: number): Promise<IEvent | null>
  createEvent(eventPayload: IEventPayload): Promise<IEvent>
  getEventByName(eventName: string): Promise<IEvent | null>
  getEventByDate(eventDate: Date): Promise<IEvent | null>
  updateEventById(id: number, eventPayload: IEventPayload): Promise<IEvent | number>
}