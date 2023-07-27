import SequelizeEvents from '../database/models/sequelizeEvents';
import { Op } from 'sequelize';
import { IEventModel } from '../Interfaces/Events/IEventModel';
import { IEvent } from '../Interfaces/Events/IEvents';
import SequelizeUsers from '../database/models/sequelizeUsers';
import { IEventPayload } from '../Interfaces/Events/IEventPayload';

export default class EventModel implements IEventModel {
  private eventModel = SequelizeEvents;
  
  async getAllEvents(): Promise<IEvent[]> {
    const allEvents = await this.eventModel.findAll();
    return allEvents;
  }

  async getOpenEvents(): Promise<IEvent[]> {
    const openEvents = await this.eventModel.findAll({
      where: {
         eventType: {
          [Op.or]: ['free', 'registered']}}
    });
    return openEvents;
  }

  async getEventByName(eventName: string): Promise<IEvent | null> {
    const event = await this.eventModel.findOne({
      where: { eventName }
    })
    if (!event) {
      return null
    }
     return event;
  }

  async getEventByDate(eventDate: Date): Promise<IEvent | null> {
    const event = await this.eventModel.findOne({
      where: { eventDate }
    })
    if (!event) {
      return null
    }
     return event;
  }

  async getEventsById(id: number): Promise<IEvent | null> {
    const event = await this.eventModel.findOne({
      // const events = await SequelizeEventUser.findOne({
      where: { id },
      include: { 
        model: SequelizeUsers,
        as: 'users',
        attributes: ['id', 'username'],
        through: { attributes: []}
      }
    });
    if (!event) {
      return null
    }
     return event;
    }

  async createEvent(eventPayload: IEventPayload): Promise<IEvent> {
    const newEvent = await this.eventModel.create(eventPayload);
    return newEvent;  
  }
}

