import { Controller, Get, Post, Body } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { CardsService } from '../cards/cards.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly cardsService: CardsService,
  ) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Post('/new')
  async create(@Body() user: CreateUserDto): Promise<User> {
    const userCards = await this.cardsService.getUserInitialCards();
    const dbUser = await this.usersService.create({
      ...user,
      cards: userCards,
    });
    return dbUser;
  }
}
