import { IUser, IUserPayload } from './IUser';

export interface IUserModel {
  getAllUsers(): Promise<IUser[]>,
  getUserByEmail(email:string): Promise<IUser | null>
  // getRoleUserByEmail(): Promise<IUser | null> 
  createUser(UserPayload: IUserPayload): Promise<IUser>
  getUserById(id: number): Promise<IUser | null>
  activateUser(id: number):  Promise<IUser | number>
}