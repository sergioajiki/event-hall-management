import SequelizeUsers from '../database/models/sequelizeUsers';
import { IUser, IUserPayload } from '../Interfaces/Users/IUser';
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
    return !user ? null : user;
  }

  async getUserById(id: number): Promise<IUser | null> {
    const  user = await this.model.findByPk(id, {
      attributes: {exclude: ['password', 'activationCode']}
    });
    return !user ? null : user;
  }

  async activateUser(id: number): Promise<IUser | number> {
    const [updateUser] = await this.model.update({ status: 1 }, {
      where: { id },
    })
    return updateUser
  }

  async createUser(userPayload: IUser): Promise<IUser> {
    const newUser = await this.model.create(userPayload);
    return newUser;
  }

  async updateUserById(id: number, userPayload: IUserPayload)
  : Promise<IUser | number> {
  const [updatedUser] = await this.model.update(userPayload, {
    where: { id },
  })
  return updatedUser;
}
  

}
