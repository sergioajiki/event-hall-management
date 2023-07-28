import { IEventUserModel } from '../Interfaces/EventsUsers/IEventUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import UserModel from '../model/user.model';
import EventModel from '../model/event.model';
import EventUserModel from '../model/eventUser.model';
import { IEventModel } from '../Interfaces/Events/IEventModel';
import { IUserModel } from '../Interfaces/Users/IUserModel';
import e from 'express';

export default class EventUserService {
  constructor(
    private eventUserModel: IEventUserModel = new EventUserModel(),
    private eventModel: IEventModel = new EventModel(),
    private userModel: IUserModel = new UserModel(),
  ) {}
  public async createSubscription(idEvent: number, email: string)
  : Promise<ServiceResponse<string>> {
    const isEvent = await this.eventModel.getEventsById(+idEvent);
    if (!isEvent){
      return { status: 'NOT_FOUND', data: { message: 'Event not found' } };
    }
    const isUser = await this.userModel.getUserByEmail(email);
    if (!isUser) {
      return { status: 'NOT_FOUND', data: { message: 'User not found' } };  
    }
    const eventInfo = await this.eventUserModel.getSubscriptions(+idEvent, +isUser.id);
    console.log('eventInfo', eventInfo);
    
    if (eventInfo) {
      return { status: 'CONFLICT', data: { message: 'Usuário já está inscrito para este evento' } };
    }
    const eventSubscription = { idEvent, idUser: isUser.id }
    await this.eventUserModel.createSubscription(eventSubscription);
    return { status: 'CREATE', data: { message: 'Registration done' } };
  } 
}