import SequelizeUsers from '../database/models/sequelizeUsers';
import { IUser } from '../Interfaces/Users/IUser';
import { IUserModel } from '../Interfaces/Users/IUserModel';


export default class UserModel implements IUserModel {
  private model = SequelizeUsers;
  
  async getAllUsers(): Promise<IUser[]> {
    const allUsers = await this.model.findAll({
      attributes: {exclude: ['password']}
    });
    return allUsers;
  }

  async getUserByEmail(email:string): Promise<IUser | null> {
    const user = await this.model.findOne({
      where: { email }
    })
    if(!user) {
      return null
    }
    return user;
  }

  async createUser(userPayload: IUser): Promise<IUser> {
    const newUser = await this.model.create(userPayload);
    return newUser;
  }
}
