import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Hero } from './entities/hero.entity';
import { Prisma, ThreatRank } from '@prisma/client';
import { HistoryService } from '../history/history.service';
import { CreateHistoryDto } from '../history/dto/create-history.dto';
import { ThreatOccurrence } from '../threats/dto/threat.dto';

@Injectable()
export class HerosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly historyService: HistoryService,
  ) {}

  private sortedHeros(
    heros: Hero[],
    location: { lat: number; lng: number },
  ): Hero[] {
    return heros.sort((heroA, heroB) => {
      const distanceA = this.calculateDistance(
        location.lat,
        location.lng,
        heroA.lati,
        heroA.longi,
      );
      const distanceB = this.calculateDistance(
        location.lat,
        location.lng,
        heroB.lati,
        heroB.longi,
      );

      return distanceA - distanceB;
    });
  }

  private calculateDistance(
    latitude1: number,
    longitude1: number,
    latitude2: number,
    longitude2: number,
  ): number {
    const earthRadius = 6371; // Raio médio da Terra em quilômetros

    const degToRad = (deg: number) => {
      return deg * (Math.PI / 180);
    };

    const dLat = degToRad(latitude2 - latitude1);
    const dLon = degToRad(longitude2 - longitude1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(latitude1)) *
        Math.cos(degToRad(latitude2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;

    return distance;
  }

  private generateRandomDuration(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async updateHeroWithOcurrenceDuration(
    hero: Hero,
    minDuration: number,
    maxDuration: number,
    location: {
      lat: number;
      lng: number;
    },
    threatName: string,
    threatRank: ThreatRank,
  ): Promise<Hero> {
    const battleDuration = this.generateRandomDuration(
      minDuration,
      maxDuration,
    );
    const battleEndTimestamp = new Date();
    battleEndTimestamp.setSeconds(
      battleEndTimestamp.getSeconds() + battleDuration,
    );

    const historyCreatePayload: CreateHistoryDto = {
      duration: battleDuration,
      heroId: hero.id,
      threatName,
      threatRank,
    };

    const updatedHero = await this.prisma.hero.update({
      where: { id: hero.id },
      data: {
        battle_end_timestamp: battleEndTimestamp,
        lati: location.lat,
        longi: location.lng,
      },
    });
    this.historyService.createHistory(historyCreatePayload);
    return updatedHero;
  }

  async create(createHeroDto: CreateHeroDto): Promise<Hero> {
    const data: Prisma.HeroCreateInput = {
      ...createHeroDto,
      battle_end_timestamp: new Date(),
      active: true,
    };

    const createdHero = await this.prisma.hero.create({ data });

    return {
      ...createdHero,
    };
  }

  async findAll() {
    return await this.prisma.hero.findMany({
      where: {
        active: true,
      },
    });
  }

  async getAvailableHero(
    location: {
      lat: number;
      lng: number;
    },
    threatQueuePriority: Array<{
      class: string;
      min: number;
      max: number;
    }>,
    ocurrence: ThreatOccurrence,
  ): Promise<Hero> {
    const heros = await this.prisma.hero.findMany({
      where: {
        battle_end_timestamp: {
          lt: new Date(),
        },
      },
    });

    const sortedHeros = this.sortedHeros(heros, location);

    let selectedHero: Hero | null = null;

    for (const threat of threatQueuePriority) {
      const matchingHero = sortedHeros.find(
        (hero) => hero.class === threat.class,
      );

      if (matchingHero) {
        selectedHero = matchingHero;
        await this.updateHeroWithOcurrenceDuration(
          selectedHero,
          threat.min,
          threat.max,
          location,
          ocurrence.monsterName,
          ocurrence.dangerLevel as ThreatRank,
        );
        break;
      }
    }

    return selectedHero;
  }

  findOne(id: number) {
    return `This action returns a #${id} hero`;
  }

  async update(id: number, updateHeroDto: UpdateHeroDto): Promise<Hero> {
    const hero = await this.prisma.hero.update({
      where: { id },
      data: updateHeroDto,
    });

    if (!hero) {
      throw new NotFoundException(`Hero ${id} not found`);
    }

    return hero;
  }

  async delete(id: number): Promise<Hero> {
    const hero = await this.prisma.hero.findUnique({
      where: { id },
    });

    if (!hero) {
      throw new NotFoundException(`Hero with ID ${id} not found`);
    }

    const deletedHero = await this.prisma.hero.update({
      where: { id },
      data: {
        active: false,
      },
    });

    return deletedHero;
  }
}
