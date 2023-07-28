import UserModel from '../model/user.model';
import { IUser, IUserPayload } from '../Interfaces/Users/IUser';
import { IUserModel } from '../Interfaces/Users/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import activationCodeGenerator from '../utils/activationCodeGenerator';
import BcryptUtils from '../utils/bcryptUtils';
import { Token } from '../Interfaces/Token';
import { ILogin } from '../Interfaces/ILogin';
import JwtUtils from '../utils/jwtUtils';
import emailBullService from '../utils/emailBullService';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
    private bcryptUtils = new BcryptUtils(),
  ) {}

  public async createUser(userPayload: IUserPayload): Promise<ServiceResponse<string>> {
    const { username, email, password } = userPayload;
    const isEmail = await this.userModel.getUserByEmail(email);
    if (isEmail) return { status: 'CONFLICT',  data: { message: 'Email já está cadastrado' } };
    const activationCode = activationCodeGenerator.generateActivationCode()
    const payload = {
      username,
      email,
      password: this.bcryptUtils.hashPassword(password),
      role: 'guest',
      activationCode,
      status: 0
    }
    await this.userModel.createUser(payload)
    await emailBullService.emailQueue.add({email, username, activationCode})
      return {
        status: 'CREATE',
        data: { message: 'Usuário foi cadastrado! Verifique seu email para ativar sua conta' }
      }
  }

  public async login(loginInfo: ILogin): Promise<ServiceResponse<Token>> {
    const { email, password } = loginInfo
    const userInfo = await this.userModel.getUserByEmail(email);
    if (!userInfo){
      return {
        status: 'UNAUTHORIZED',
        data: { message: 'Invalid email or password' },
      };
    }
    const isValidPassword = this.bcryptUtils.checkPassword(password, userInfo.password);
    if (!isValidPassword) {
      return {
        status: 'UNAUTHORIZED',
        data: { message: 'Invalid email or password' },
      };
    }
    const payload = { id: userInfo.id, email: userInfo.email };
    const token = JwtUtils.sign(payload)
    return { status: 'SUCCESSFUL', data: { token } };
  }
  public async getAllUsers(): Promise<ServiceResponse<IUser[]>> {
    const allUsers = await this.userModel.getAllUsers();
    return {
      status: 'SUCCESSFUL',
      data: allUsers,
    }
  }
}