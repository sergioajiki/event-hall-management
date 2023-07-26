import UserModel from '../model/user.model';
import { IUserPayload } from '../Interfaces/Users/IUser';
import { IUserModel } from '../Interfaces/Users/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import activationCodeGenerator from '../utils/activationCodeGenerator';
import BcryptUtils from '../utils/bcriptUtils';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
    private bcryptUtils = new BcryptUtils(),
  ) {}

  public async createUser(userPayload: IUserPayload): Promise<ServiceResponse<string>> {
    const { username, email, password } = userPayload;
    const alreadyRegisteredEmail = await this.userModel.getUserByEmail(email);
    if (alreadyRegisteredEmail) {
        return { status: 'CONFLICT', data: { message: 'Email já está cadastrado' } }  
    }
    
    const payload = {
      username,
      email,
      password: this.bcryptUtils.hashPassword(password),
      role: 'guest',
      activationCode: activationCodeGenerator.generateActivationCode(),
      status: 0
    }
    await this.userModel.createUser(payload)
      return {
        status: 'CREATE',
        data: { message: 'Usuário foi cadastrado! Verifique seu email para ativar sua conta' }
      }
  }
}