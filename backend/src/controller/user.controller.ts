import { Request, Response } from 'express';
import maptStatusHTTP from '../utils/mapStatusHTTP';
import UserService from '../service/user.service';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) {}

  public async createUser(req: Request, res: Response): Promise<Response> {
    const payload = req.body;
    const response = await this.userService.createUser(payload);
    return res.status(maptStatusHTTP(response.status)).json(response.data)
  }

  public async getAllUsers(req: Request, res: Response): Promise<Response> {
    const response = await this.userService.getAllUsers();
    return res.status(maptStatusHTTP(response.status)).json(response.data)
  }

  public async getRoleUserByEmail(req: Request, res: Response): Promise<Response> {
    const loginInfo = req.body;
    const response = await this.userService.getRoleUserByEmail(loginInfo);
    return res.status(maptStatusHTTP(response.status)).json(response.data);
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const loginInfo = req.body;
    const response = await this.userService.login(loginInfo);
    return res.status(maptStatusHTTP(response.status)).json(response.data);
  }

  public async activateUser(req: Request, res: Response): Promise<Response> {
    const { userId, activationCode } = req.params;
    const response = await this.userService.activateUser(+userId, activationCode);
    return res.status(maptStatusHTTP(response.status)).json(response.data);
  }

  public async updateRoleUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const payload = req.body;
    const response = await this.userService.updateRoleUserById(+id, payload);
    return res.status(maptStatusHTTP(response.status)).json(response.data)
  }

  public async getUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userById = await this.userService.getUserById(+id);
    return res.status(maptStatusHTTP(userById.status)).json(userById.data)
  }
}
