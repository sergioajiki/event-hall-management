import { IEvent } from './IEvents';

export interface IEventModel {
  getAllEvents(): Promise<IEvent[]>,
  getOpenEvents(): Promise<IEvent[]>
}