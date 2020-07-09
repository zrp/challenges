import 'reflect-metadata';
import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import CreateUserService from './CreateuserService';

describe('CreateUserServices', () => {
  it('should be able to create a new user', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUserService = new CreateUserService(fakeUserRepository);

    const user = await createUserService.execute({
      name: 'teste',
      email: 'teste@teste.com',
      password: '123',
    });

    expect(user.name).toBe('teste');
  });

  it('should not be able to create a new user using email existent', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUserService = new CreateUserService(fakeUserRepository);

    const user = await createUserService.execute({
      name: 'teste',
      email: 'teste@teste.com',
      password: '123',
    });

    await expect(
      createUserService.execute({
        name: 'teste2',
        email: 'teste@teste.com',
        password: '1235',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
