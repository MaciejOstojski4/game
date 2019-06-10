import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';
import { Client, Server } from 'socket.io';

import { User } from '../../users/interfaces/users.interface';
import { GamesService } from '../games.service';
import { CreateGameDto } from '../dto/create-game.dto';

interface JoinData {
  user: User;
  gameId: string;
}

@WebSocketGateway(80, { namespace: 'games' })
export class GamesGateway {
  constructor(private readonly gamesService: GamesService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('create')
  async handleCreateEvent(client: Client, data: CreateGameDto): Promise<void> {
    await this.gamesService.create(data);
    const games = await this.gamesService.getAll();
    this.server.emit('created', { games: games });
  }

  @SubscribeMessage('join')
  async handleJoinEvent(client: Client, data: JoinData): Promise<void> {
    const game = await this.gamesService.getById(data.gameId);
    // game.users = [...game.usersId, data.user._id];
    // await this.gamesService.update({
    //   id: game._id,
    //   currentTurnNo: game.currentTurnNo,
    //   currentTurnUserId: game.currentTurnUserId,
    //   roomId: game.roomId,
    //   result: game.result,
    //   usersId: game.usersId,
    // });
    this.server.emit(game.roomId, { user: data.user });
  }
}
