import { compare } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import authConfig from '../../../share/config/auth';
import User from '../infra/database/entities/User';
import IUserRepository from '../repositories/IUserRepository';
import IAuthenticateDto from '../dtos/IAuthenticateDto';

interface Request {
  email: string;
  password: string;
}
interface Response {
  user: User;
  token: string;
}
@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute({
    email,
    password,
  }: Request): Promise<IAuthenticateDto> {
    const user = await this.usersRepository.findEmail(email);

    if (!user) {
      throw new Error('Incorrect email/password combination');
    }

    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}
export default AuthenticateUserService;
