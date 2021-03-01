import { Controller, Get, Post, Put, Body, Query } from '@nestjs/common';
import { UpdateResult } from 'typeorm';

import { UsersService } from './users.service';

import { User } from '../entities/user.entity';

import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Get()
  find(@Query() query): Promise<User> {
    return this.usersService.findByUsername(query.username);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Put()
  update(@Body() updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.usersService.update(updateUserDto);
  }
}
