import { Connection } from 'mongoose';

import Constants from '../constants';
import { UserSchema } from './schemas/users.schema';

export const usersProviders = [
  {
    provide: Constants.database.models.UserModel,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [Constants.database.config.DatabaseConnection],
  },
];
