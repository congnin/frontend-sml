import { Controller, Get, Post, Put, Body, Query, Req } from '@nestjs/common';
import { UpdateResult } from 'typeorm';

import { CommentsService } from './comments.service';
import { UsersService } from '../users/users.service';

import { Comment } from '../entities/comment.entity';

import { CreateCommentDto } from './dtos/create-comment.dto';
import { UpdateCommentDto } from './dtos/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly usersService: UsersService
  ) {}

  @Get('recent')
  async findRecent(): Promise<any[]> {
    return this.commentsService.findRecent();
  }

  @Get()
  async findByUserId(@Query() query): Promise<any[]> {
    const user = await this.usersService.findByUsername(query.userId);
    query.userId = user.id;
    return this.commentsService.findByUserId(query);
  }

  @Get('top')
  async findTop(@Query() query): Promise<any[]> {
    return this.commentsService.findTop(query);
  }

  @Post()
  async create(@Req() request, @Body() createCommentDto: CreateCommentDto): Promise<Comment> {
    const user = await this.usersService.findByUsername(request.user.given_name.toLowerCase());
    createCommentDto.commentatorId = user.id;
    createCommentDto.commentDate = new Date();
    if(createCommentDto.commentReceiverId === createCommentDto.commentatorId) {
      throw new Error("Can not recognize yourself");
    }
    return this.commentsService.create(createCommentDto);
  }

  @Put()
  update(@Body() updateCommentDto: UpdateCommentDto): Promise<UpdateResult> {
    updateCommentDto.commentDate = new Date();
    if(updateCommentDto.commentReceiverId && updateCommentDto.commentatorId && 
        updateCommentDto.commentReceiverId === updateCommentDto.commentatorId) {
      throw new Error("Can not recognize yourself");
    }
    return this.commentsService.update(updateCommentDto);
  }

  @Put('remove')
  delete(@Body() updateCommentDto: UpdateCommentDto): Promise<UpdateResult> {
    updateCommentDto.isDeleted = true;
    return this.commentsService.update(updateCommentDto);
  }
}
