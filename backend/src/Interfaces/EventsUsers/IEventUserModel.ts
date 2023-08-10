import { IEventSubscription } from './IEventSubscription'
import { IEventUser } from './IEventUser'
export interface IEventUserModel {
  createSubscription(eventSubscription: IEventSubscription): Promise<IEventUser>  
  getSubscriptions(idEvent: number, idUser: number): Promise<IEventUser | null>
}