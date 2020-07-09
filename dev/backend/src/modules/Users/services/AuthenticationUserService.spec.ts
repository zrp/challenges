import 'reflect-metadata';
import FakeuserRepository from '../repositories/fakes/FakeUserRepository';
import AuthenticateUserService from './AuthenticationUserService';
import { uuid } from 'uuidv4';

describe('AuthenticationuserService', () => {
  it('should be able to authenticate user', async () => {
    const fakeUserRepository = new FakeuserRepository();
    const authenticationUserService = new AuthenticateUserService(
      fakeUserRepository,
    );
    const user = fakeUserRepository.create({
      id: uuid(),
      name: 'teste',
      email: 'teste@email.com',
      password: '123',
    });
    const authenticated = await authenticationUserService.execute({
      email: (await user).email,
      password: (await user).password,
    });
    expect(authenticated.user.password).toBe('123');
  });
  it('should not be able to authenticate user', async () => {
    const fakeUserRepository = new FakeuserRepository();
    const authenticationUserService = new AuthenticateUserService(
      fakeUserRepository,
    );
    const user = fakeUserRepository.create({
      id: uuid(),
      name: 'teste',
      email: 'teste@email.com',
      password: '123',
    });
    await expect(
      authenticationUserService.execute({
        email: 'teste@email.com',
        password: '1234',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
