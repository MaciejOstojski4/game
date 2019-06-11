import { Connection } from 'mongoose';

import Constants from '../constants';
import { CardsSchema, CardCategorySchema } from './schema/cards.schema';

export const cardsProviders = [
  {
    provide: Constants.database.models.GameModel,
    useFactory: (connection: Connection) => {
      connection.model('Card', CardsSchema);
      connection.model('CardCategory', CardCategorySchema);
    },
    inject: [Constants.database.config.DatabaseConnection],
  },
];
