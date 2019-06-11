import { IsNotEmpty } from 'class-validator';

import { Card } from '../../cards/interfaces/cards.interface';

export class CreateUserDto {
  @IsNotEmpty()
  readonly nick: string;

  readonly cards: Card[];
}
