import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Game } from './interfaces/games.interface';
import { CreateGameDto, UpdateGameDto } from './dto/create-game.dto';
import Constants from '../constants';

@Injectable()
export class GamesService {
  constructor(
    @Inject(Constants.database.models.GameModel)
    private readonly gameModel: Model<Game>,
  ) {}

  async getAll(): Promise<Game[]> {
    return this.gameModel.find().populate('users');
  }

  async create(createGameDto: CreateGameDto): Promise<Game> {
    const createdGame = new this.gameModel(createGameDto);
    return createdGame.save();
  }

  async update(updateGameDto: UpdateGameDto): Promise<Game> {
    const updatedGame = this.gameModel.find({ _id: updateGameDto.id });
    return updatedGame.update(updateGameDto);
  }

  async getById(id: string): Promise<Game> {
    return await this.gameModel.findOne({ _id: id });
  }
}
