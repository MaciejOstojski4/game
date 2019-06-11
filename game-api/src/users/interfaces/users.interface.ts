import { Card } from '../../cards/interfaces/cards.interface';

export interface User {
  _id: string;
  nick: string;
  cards: Card[];
}
