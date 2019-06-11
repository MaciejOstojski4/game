import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  nick: String,
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card',
    },
  ],
});
