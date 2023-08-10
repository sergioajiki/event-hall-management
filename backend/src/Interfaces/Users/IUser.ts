import { UserStatus } from './Userstatus';

export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  activationCode: string;
  status: UserStatus | number ;    
}

export interface IUserPayload {
  username: string,
  email: string,
  password: string
  role: string
}
