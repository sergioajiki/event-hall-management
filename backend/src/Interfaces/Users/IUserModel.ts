import { IUser } from './IUser';

export interface IUserModel {
  getAllUsers(): Promise<IUser[]>,
  // getUserByEmail(): Promise<IUser | null>
  // getRoleUserByEmail(): Promise<IUser | null>  
}