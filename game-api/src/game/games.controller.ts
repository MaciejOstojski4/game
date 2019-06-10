import { Controller, Post, Body, Put, Get } from '@nestjs/common';

import { CreateGameDto, UpdateGameDto } from './dto/create-game.dto';
import { Game } from './interfaces/games.interface';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get('/')
  async index(): Promise<Game[]> {
    const response = await this.gamesService.getAll();
    return await this.gamesService.getAll();
  }

  @Put('/update')
  async update(@Body() game: UpdateGameDto): Promise<Game> {
    return await this.gamesService.update(game);
  }
}