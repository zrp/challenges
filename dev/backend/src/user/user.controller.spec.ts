import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, PrismaService],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = {
        email: 'teste@teste.com',
        password: 'Abc@12342342532',
        name: 'teste',
      };

      jest.spyOn(service, 'create').mockImplementation(async (dto) => {
        return {
          id: Math.floor(Math.random() * 1000),
          email: dto.email,
          name: dto.name,
          password: '',
        } as User;
      });

      const result = await controller.create(createUserDto);

      expect(result.email).toEqual(createUserDto.email);
      expect(result.name).toEqual(createUserDto.name);
      expect(service.create).toHaveBeenCalledWith(createUserDto);
    });
  });
});
