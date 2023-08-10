import { EventType } from '../Events/EventType'
export interface IEvent {
  id: number;
  eventName: string;
  eventDate: Date;
  eventTime: Date;
  eventType: EventType | string;
  description: string;
  users?: [];
}