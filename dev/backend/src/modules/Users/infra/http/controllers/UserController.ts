import { container } from 'tsyringe';
import { Request, Response } from 'express';
import CreateUserService from '../../../services/CreateuserService';

class UserController {
  public async store(request: Request, response: Response): Promise<Response> {
    const createuser = container.resolve(CreateUserService);
    const { name, email, password } = request.body;
    const user = await createuser.execute({ name, email, password });

    return response.json(user);
  }
}

export default UserController;
