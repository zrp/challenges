import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AuthenticateUserService from '../../../services/AuthenticationUserService';

class SessionController {
  public async store(request: Request, response: Response): Promise<Response> {
    const authenticateUser = container.resolve(AuthenticateUserService);
    const { email, password } = request.body;
    const { user, token } = await authenticateUser.execute({ email, password });
    return response.json({ user, token });
  }
}

export default SessionController;
