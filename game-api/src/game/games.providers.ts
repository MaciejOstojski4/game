import { Connection } from 'mongoose';

import Constants from '../constants';
import { GamesSchema } from './schemas/games.schema';

export const gamesProviders = [
  {
    provide: Constants.database.models.GameModel,
    useFactory: (connection: Connection) =>
      connection.model('Game', GamesSchema),
    inject: [Constants.database.config.DatabaseConnection],
  },
];
