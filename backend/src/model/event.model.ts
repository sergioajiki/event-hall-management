import SequelizeEvents from '../database/models/sequelizeEvents';
import { Op } from 'sequelize';
import { IEventModel } from '../Interfaces/Events/IEventModel';
import { IEvent } from '../Interfaces/Events/IEvents';

export default class EventModel implements IEventModel {
  private model = SequelizeEvents;
  
  async getAllEvents(): Promise<IEvent[]> {
    const allEvents = await this.model.findAll();
    return allEvents;
  }

  async getOpenEvents(): Promise<IEvent[]> {
    const openEvents = await this.model.findAll({
      where: {
         eventType: {
          [Op.or]: ['free', 'registered']}}
    });
    return openEvents;
  }
}

