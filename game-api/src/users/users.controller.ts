import { Controller, Get, Post, Body } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    const dbUser = await this.usersService.create(user);
    return dbUser;
  }
}
