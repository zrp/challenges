import IUserDto from './IUserDto';

export default interface IAuthenticateDto {
  user: IUserDto;
  token: string;
}
