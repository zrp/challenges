import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHistoryDto } from './dto/create-history.dto';

@Injectable()
export class HistoryService {
  constructor(private readonly prisma: PrismaService) {}

  async createHistory(createHistoryDto: CreateHistoryDto) {
    console.log('history created:', createHistoryDto);
    return this.prisma.history.create({ data: createHistoryDto });
  }
}
