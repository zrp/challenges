import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/database/entities/User';
import IUserDto from '../dtos/IUserDto';

export default interface IUserRepository {
  findEmail(email: string): Promise<IUserDto>;
  create(userData: IUserDto): Promise<IUserDto>;
}
