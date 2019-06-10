import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import Constants from '../constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(Constants.database.models.UserModel)
    private readonly userModel: Model<User>,
  ) {}

  async create(CreateUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(CreateUserDto);
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async getById(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }
}
