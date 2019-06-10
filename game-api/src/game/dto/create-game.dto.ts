import { IsNotEmpty } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty()
  userId: string[];

  @IsNotEmpty()
  roomId: string;
}

export class UpdateGameDto {
  @IsNotEmpty()
  id: string;

  usersId: string[];
  result: number;
  currentTurnNo: number;
  currentTurnUserId: string;
  roomId: string;
}
