import { EventType } from '../Events/EventType'
export interface IEventPayload {
    eventName: string;
    eventDate: Date;
    eventTime: Date;
    eventType: EventType;
    description: string;
}