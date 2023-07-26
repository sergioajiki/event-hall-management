import UserModel from '../model/user.model';
import { IUserPayload } from '../Interfaces/Users/IUser';
import { IUserModel } from '../Interfaces/Users/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import activationCodeGenerator from '../utils/activationCodeGenerator';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) {}

  public async createUser(userPayload: IUserPayload): Promise<ServiceResponse<string>> {
    const { email } = userPayload;
    const alreadyRegisteredEmail = await this.userModel.getUserByEmail(email);
    if (alreadyRegisteredEmail) {
        return { status: 'CONFLICT', data: { message: 'Email já está cadastrado' } }  
    }
    
    const payload = {
      ...userPayload,
      role: 'guest',
      activationCode: activationCodeGenerator.generateActivationCode(),
      status: 0
    }
    await this.userModel.createUser(payload)
      return {
        status: 'SUCCESSFUL',
        data: { message: 'Usuário foi cadastrado! Verifique seu email para ativar sua conta' }
      }
  }
}