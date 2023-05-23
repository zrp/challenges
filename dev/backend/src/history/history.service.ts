import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHistoryDto } from './dto/create-history.dto';

@Injectable()
export class HistoryService {
  constructor(private readonly prisma: PrismaService) {}

  async createHistory(createHistoryDto: CreateHistoryDto) {
    return this.prisma.history.create({ data: createHistoryDto });
  }

  async findAllWithHeroCoordinates(): Promise<any[]> {
    return this.prisma.history.findMany({
      include: {
        hero: {
          select: {
            lati: true,
            longi: true,
            name: true,
            class: true,
          },
        },
      },
    });
  }
}
