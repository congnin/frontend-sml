import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Comment } from '../entities/comment.entity';
import { User } from '../entities/user.entity';
import { UserProject } from '../entities/user-project.entity';

import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { UsersService } from '../users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, User, UserProject])],
  controllers: [CommentsController],
  providers: [CommentsService, UsersService],
  exports: [TypeOrmModule, CommentsService]
})
export class CommentsModule {}
