import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import Constants from '../constants';
import { Card } from './interfaces/cards.interface';

@Injectable()
export class CardsService {
  INITIAL_CARDS_NO = 2;
  constructor(
    @Inject(Constants.database.models.CardModel)
    private readonly cardModel: Model<Card>,
  ) {}

  async getAll(): Promise<Card[]> {
    return await this.cardModel.find().populate('cardsCategory');
  }

  async getUserInitialCards(): Promise<Card[]> {
    const cards = await this.getAll();
    const userCards: Card[] = [];
    while (userCards.length <= this.INITIAL_CARDS_NO) {
      const cardIndex = Math.floor(Math.random() * cards.length);
      const choosenCard = cards[cardIndex];
      if (userCards.indexOf(choosenCard) === -1) userCards.push(choosenCard);
    }
    return userCards;
  }
}
