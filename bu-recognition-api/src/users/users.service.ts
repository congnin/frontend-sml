import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

import { User } from '../entities/user.entity';
import { UserProject } from '../entities/user-project.entity';
import { Comment } from '../entities/comment.entity';

import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(UserProject)
    private userProjectsRepository: Repository<UserProject>,
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.usersRepository.save(createUserDto);
  }

  async update(updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return await this.usersRepository.update(updateUserDto.id, updateUserDto);
  }

  /**
   * Find user by username (get user detail)
   * @param username 
   */
  async findByUsername(username: string): Promise<any> {
    return await this.usersRepository.createQueryBuilder('u')
      .where('u.username = :username', { username: username })
      .select(['u.id as id, u.username as username', 'u.lastName as lastName', 'u.firstName as firstName', 'u.isFemale as isFemale', 'u.joinedAt as joinedAt',
    'u.projectRole as projectRole'])
      .getRawOne();
  }
}
