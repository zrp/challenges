import { uuid } from 'uuidv4';
import IUserRepository from '../IUserRepository';
import IUserDto from 'modules/Users/dtos/IUserDto';

class FakeuserRepository implements IUserRepository {
  private fakeUserRepository: IUserDto[] = [];

  public async findEmail(email: string): Promise<IUserDto> {
    const user = this.fakeUserRepository.find(user => user.email === email);
    return user;
  }
  public async create(userData: IUserDto): Promise<IUserDto> {
    this.fakeUserRepository.push(userData);
    return userData;
  }
}

export default FakeuserRepository;
