import { Controller, Body, Put, Get } from '@nestjs/common';

import { Card } from './interfaces/cards.interface';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async index(): Promise<Card[]> {
    return await this.cardsService.getAll();
  }
}
