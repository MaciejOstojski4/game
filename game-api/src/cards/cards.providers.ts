import { Connection } from 'mongoose';

import Constants from '../constants';
import { CardsSchema, CardCategorySchema } from './schema/cards.schema';

export const cardsProviders = [
  {
    provide: Constants.database.models.CardModel,
    useFactory: (connection: Connection) =>
      connection.model('Card', CardsSchema),
    inject: [Constants.database.config.DatabaseConnection],
  },
];
