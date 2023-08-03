import { IUser, IUserPayload } from './IUser';

export interface IUserModel {
  getAllUsers(): Promise<IUser[]>,
  getUserByEmail(email:string): Promise<IUser | null>
  // getRoleUserByEmail(email: string): Promise<string | null> 
  createUser(UserPayload: IUserPayload): Promise<IUser>
  getUserById(id: number): Promise<IUser | null>
  activateUser(id: number):  Promise<IUser | number>
  updateUserById(id: number, userPayload: IUserPayload): Promise<IUser | number>
}