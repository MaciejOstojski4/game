import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { CardsController } from './cards.controller';
import { cardsProviders } from './cards.providers';
import { CardsService } from './cards.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CardsController],
  providers: [CardsService, ...cardsProviders],
})
export class CardsModule {}
