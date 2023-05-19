import { Class } from '@prisma/client';
import {
  IsEnum,
  IsNumber,
  IsString,
  ValidationArguments,
} from 'class-validator';

export class CreateHeroDto {
  @IsString()
  name: string;

  @IsEnum(Class, {
    message: (args: ValidationArguments) => {
      const allowedValues = Object.values(Class).join(', ');
      return `Invalid class value provided. Allowed values: ${allowedValues}`;
    },
  })
  class: Class;

  @IsNumber()
  lati: number;

  @IsNumber()
  longi: number;
}
