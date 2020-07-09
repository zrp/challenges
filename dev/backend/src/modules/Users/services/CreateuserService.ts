import { hash } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/database/entities/User';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const checkupserExists = await this.usersRepository.findEmail(email);

    if (checkupserExists) {
      throw new Error('Email address already used');
    }
    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    delete user.password;
    return user;
  }
}

export default CreateUserService;
