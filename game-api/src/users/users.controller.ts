import { Controller, Get } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './interfaces/users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  create(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
