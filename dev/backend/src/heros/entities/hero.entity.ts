import { Class } from '@prisma/client';

export class Hero {
  id?: number;
  name: string;
  class: Class;
  lati: number;
  longi: number;
  battle_end_timestamp?: Date;
}
