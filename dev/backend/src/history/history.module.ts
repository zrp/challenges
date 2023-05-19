import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [HistoryController],
  providers: [HistoryService, PrismaService],
  exports: [HistoryService],
})
export class HistoryModule {}
