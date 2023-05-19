import { Module } from '@nestjs/common';
import { ThreatsService } from './threats.service';
import { ThreatsGateway } from './threats.gateway';
import { HerosService } from '../heros/heros.service';
import { PrismaModule } from '../prisma/prisma.module';
import { HistoryService } from '../history/history.service';

@Module({
  imports: [PrismaModule],
  providers: [ThreatsGateway, ThreatsService, HerosService, HistoryService],
})
export class ThreatsModule {}
