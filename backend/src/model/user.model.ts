import SequelizeUsers from '../database/models/sequelizeUsers';
import { IUser } from '../Interfaces/Users/IUser';
import { IUserModel } from '../Interfaces/Users/IUserModel';

export default class UserModel implements IUserModel {
  private model = SequelizeUsers;
  
  async getAllUsers(): Promise<IUser[]> {
    const allUsers = await this.model.findAll();
    return allUsers;
  }
}
