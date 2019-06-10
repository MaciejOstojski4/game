import * as mongoose from 'mongoose';

import Constants from '../../constants';

export const GamesSchema = new mongoose.Schema(
  {
    result: Number,
    currentTurnNo: Number,
    currentTurnUserId: String,
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { strict: false },
);
