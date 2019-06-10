import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { GamesController } from './games.controller';
import { gamesProviders } from './games.providers';
import { GamesService } from './games.service';
import { GamesGateway } from './gateways/games.gateway';

@Module({
  imports: [DatabaseModule],
  controllers: [GamesController],
  providers: [GamesService, GamesGateway, ...gamesProviders],
})
export class GamesModule {}
