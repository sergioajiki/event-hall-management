import UserModel from '../model/user.model';
import activationCodeGenerator from '../utils/activationCodeGenerator';
import BcryptUtils from '../utils/bcryptUtils';
import JwtUtils from '../utils/jwtUtils';
import emailBullService from '../utils/emailBullService';
import buildActivationUrl from '../utils/activationUrlBuilder';
import { IUser, IUserPayload } from '../Interfaces/Users/IUser';
import { IUserModel } from '../Interfaces/Users/IUserModel';
import { ServiceMessage, ServiceResponse, Role } from '../Interfaces/ServiceResponse';
import { ILogin } from '../Interfaces/ILogin';
import { Token } from '../Interfaces/Token';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
    private bcryptUtils = new BcryptUtils(),
  ) {}

  public async createUser(userPayload: IUserPayload): Promise<ServiceResponse<string>> {
    const isEmail = await this.userModel.getUserByEmail(userPayload.email);
    if (isEmail) return { status: 'CONFLICT',  data: { message: 'Email já está cadastrado' } };
    const payload = {
      username: userPayload.username,
      email: userPayload.email,
      password: this.bcryptUtils.hashPassword(userPayload.password),
      role: 'guest',
      activationCode: activationCodeGenerator.generateActivationCode(),
      status: 0
    }
    const newUser = await this.userModel.createUser(payload);
    const { id, username, activationCode, email } = newUser;
    const activationUrl = buildActivationUrl( { id, activationCode } );
    await emailBullService.emailQueue.add({email, username, activationUrl, subjectType: 'inscr'})
      return {
        status: 'CREATE',
        data: { message: 'Usuário foi cadastrado! Verifique seu email para ativar sua conta' }
      }
  }

  public async login(loginInfo: ILogin): Promise<ServiceResponse<Token>> {
    const { email, password } = loginInfo
    const userInfo = await this.userModel.getUserByEmail(email);
    if (!userInfo){
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const isValidPassword = this.bcryptUtils.checkPassword(password, userInfo.password);
    if (!isValidPassword) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const payload = { id: userInfo.id, email: userInfo.email };
    const token = JwtUtils.sign(payload)
    return { status: 'SUCCESSFUL', data: { token } };
  }

  public async getAllUsers(): Promise<ServiceResponse<IUser[]>> {
    const allUsers = await this.userModel.getAllUsers();
    return { status: 'SUCCESSFUL', data: allUsers }
  }
  
  public async getRoleUserByEmail(loginInfo: ILogin): Promise<ServiceResponse<string>> {
    const { email, password } = loginInfo
    const userInfo = await this.userModel.getUserByEmail(email);
    if (!userInfo){
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const isValidPassword = this.bcryptUtils.checkPassword(password, userInfo.password);
    if (!isValidPassword) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const { role } = userInfo;
    return { status: 'SUCCESSFUL', data: { role } }
  }


  public async activateUser(id: number, activationCode: string)
  : Promise<ServiceResponse<ServiceMessage>> {
    const user = await this.userModel.getUserById(+id);
    if(!user){
      return { status: 'NOT_FOUND', data: { message: 'User not found' } }
    }
    if(user?.status === 1) {
      return { status: 'CONFLICT', data: { message: `User with id ${id} already activated` } }
    }
    if(user.activationCode !== activationCode) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid Activation Code' } }
    }
    await this.userModel.activateUser(id)
    return { status: 'CREATE', data: { message: 'Status do usuário foi atualizado' } }
  }

}