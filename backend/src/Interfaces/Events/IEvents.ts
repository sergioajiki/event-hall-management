import { EventType } from '../Events/EventType'
export interface IEvent {
  id: number;
  eventName: string;
  eventData: Date;
  eventType: EventType;
}