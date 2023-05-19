import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { HerosModule } from './heros/heros.module';
import { ThreatsModule } from './threats/threats.module';
import { ThreatsGateway } from './threats/threats.gateway';
import { ThreatsService } from './threats/threats.service';
import { HistoryModule } from './history/history.module';
import { HistoryController } from './history/history.controller';
import { UserController } from './user/user.controller';
import { HerosController } from './heros/heros.controller';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    HerosModule,
    ThreatsModule,
    HistoryModule,
  ],
  controllers: [
    AppController,
    HistoryController,
    UserController,
    HerosController,
  ],
  providers: [
    AppService,
    ThreatsGateway,
    ThreatsService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
