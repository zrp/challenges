import { Module } from '@nestjs/common';
import { HerosService } from './heros.service';
import { HerosController } from './heros.controller';
import { PrismaService } from '../prisma/prisma.service';
import { HistoryService } from '../history/history.service';

@Module({
  controllers: [HerosController],
  providers: [HerosService, PrismaService, HistoryService],
  exports: [HerosService],
})
export class HerosModule {}
