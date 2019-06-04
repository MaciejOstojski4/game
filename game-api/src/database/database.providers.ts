import * as mongoose from 'mongoose';

import Constants from '../constants';

export const databaseProviders = [
  {
    provide: Constants.database.config.DatabaseConnection,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/car_game'),
  },
];
