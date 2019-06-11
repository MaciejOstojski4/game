import { Controller, Body, Put, Get } from '@nestjs/common';

import { UpdateGameDto } from './dto/create-game.dto';
import { Game } from './interfaces/games.interface';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get('/')
  async index(): Promise<Game[]> {
    return await this.gamesService.getAll();
  }

  @Put('/update')
  async update(@Body() game: UpdateGameDto): Promise<Game> {
    return await this.gamesService.update(game);
  }
}
