import { ThreatRank } from '@prisma/client';

export class CreateHistoryDto {
  heroId: number;
  threatName: string;
  threatRank: ThreatRank;
  duration: number;
}
