import SequelizeEventUser from '../database/models/sequelizeEventUser';
import { IEventUser } from '../Interfaces/EventsUsers/IEventUser';
import { IEventUserModel } from '../Interfaces/EventsUsers/IEventUserModel';
import { IEventSubscription } from '../Interfaces/EventsUsers/IEventSubscription';
import { Op } from 'sequelize';
export default class EventUserModel implements IEventUserModel {
  private model = SequelizeEventUser;

  public async createSubscription(eventSubscription: IEventSubscription): Promise<IEventUser> {
    const newSubscription = await this.model.create(eventSubscription)
    return newSubscription
  }

  public async getSubscriptions(idEvent: number, idUser: number): Promise<IEventUser | null> {
    const event = await this.model.findOne({
      where: {
        [Op.and]: [{idEvent}, {idUser}]},
    })
    return !event ? null : event;
  }
  
}