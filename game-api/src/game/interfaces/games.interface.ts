import * as mongoose from 'mongoose';

export interface Game {
  _id: string;
  users: mongoose.Schema.Types.ObjectId[];
  roomId: string;
  result: number;
  currentTurnNo: number;
  currentTurnUserId: string;
}
