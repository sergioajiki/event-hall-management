import { EventType } from '../Events/EventType'
export interface IEvent {
  id: number;
  eventName: string;
  eventData: Date;
  eventTime: Date;
  eventType: EventType | string;
  description: string;
  users?: [];
}