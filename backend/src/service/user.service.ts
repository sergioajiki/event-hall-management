import UserModel from '../model/user.model';
import activationCodeGenerator from '../utils/activationCodeGenerator';
import BcryptUtils from '../utils/bcryptUtils';
import JwtUtils from '../utils/jwtUtils';
import emailBullService from '../utils/emailBullService';
import buildActivationUrl from '../utils/activationUrlBuilder';
import { IUser, IUserPayload } from '../Interfaces/Users/IUser';
import { IUserModel } from '../Interfaces/Users/IUserModel';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
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
      role: 'client',
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

  public async getUserById(id: number)
  : Promise<ServiceResponse<IUser | null>> {
  const userById = await this.userModel.getUserById(+id);
  if (!userById) {
    return { status: 'NOT_FOUND', data: { message: 'User not found' } }
  }
  return { status: 'SUCCESSFUL', data: userById }
}

  public async updateRoleUserById(id: number, userPayload: IUserPayload)
  : Promise<ServiceResponse<IUser | number>> {
    const isUser = await this.userModel.getUserById(+id);
    if (!isUser) {
      return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    }
    await this.userModel.updateUserById(+id, userPayload);
    
    console.log('updaterle', userPayload, 'antigo', isUser);
    const { email, username } = isUser
    const { role } = userPayload
    await emailBullService.emailQueue.add({email, username, role, subjectType: 'changeRole'})

    return { status: 'CREATE', data: { message: 'Usuário foi atualizado' } };
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
    if (userInfo.status === 0) {
      return { status: 'UNAUTHORIZED', data: { message: 'Verifique o email para ativar a conta' } };
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
    const payloadData = {
      role: userInfo.role,
      status: userInfo.status
    }
    // const { role, status } = userInfo;
    return { status: 'SUCCESSFUL', data: payloadData }
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
      console.log(user);
      
      console.log(user.activationCode, activationCode);
      
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid Activation Code' } }
    }
    await this.userModel.activateUser(id)
    return { status: 'CREATE', data: { message: 'Status do usuário foi atualizado' } }
  }

}