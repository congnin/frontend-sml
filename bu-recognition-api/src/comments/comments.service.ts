import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository, UpdateResult } from 'typeorm';

import { Comment } from '../entities/comment.entity';
import { User } from '../entities/user.entity';

import { CreateCommentDto } from './dtos/create-comment.dto';
import { UpdateCommentDto } from './dtos/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async findRecent(): Promise<any[]> {
    return await this.commentsRepository.createQueryBuilder('c')
      .innerJoin('user', 'u', 'u.id = c.commentReceiverId')
      .innerJoin('user', 'u2', 'u2.id = c.commentatorId')
      .innerJoin('project', 'p', 'p.id = c.projectId')
      .where('c.content != :content', { content: '' })
      .andWhere('c.isDeleted = :isDeleted', { isDeleted: false })
      .select(['c.id as id', 'c.content as content', 'c.commentDate as commentDate', 'u.username as username', 'u.firstName as firstName', 'u.isFemale as isFemale',
      'u.lastName as lastName', 'p.name as projectName', 'u2.username as commentatorUsername', 'u2.firstName as commentatorFirstName', 'u2.lastName as commentatorLastName'])
      .orderBy('c.commentDate', 'DESC')
      .limit(5)
      .getRawMany();
  }

  async findByUserId(query: any): Promise<any> {
    const take = 5;
    const pageIndex = query.page || 1;
    const skip = (pageIndex - 1) * take;

    var queryBuilder = this.commentsRepository.createQueryBuilder('c')
      .innerJoin('user', 'u', 'u.id = c.commentatorId')
      .innerJoin('user', 'u2', 'u2.id = c.commentReceiverId')
      .innerJoin('project', 'p', 'p.id = c.projectId');
    
    switch(query.filterType) {
      case 'inbox':
        queryBuilder.where('c.commentReceiverId = :commentReceiverId', { commentReceiverId: query.userId });
        break;
      case 'recognized':
        queryBuilder.where('c.commentatorId = :commentatorId', { commentatorId: query.userId });
        break;
      default:
        queryBuilder.where(new Brackets(subquery => {
          subquery.where('c.commentReceiverId = :commentReceiverId', { commentReceiverId: query.userId });
          subquery.orWhere('c.commentatorId = :commentatorId', { commentatorId: query.userId });
        }));
        break;
    }

    if (query.projectId && query.projectId != 0) {
      queryBuilder.andWhere('c.projectId = :projectId', { projectId: query.projectId });
    }

    return queryBuilder
    .select(['c.id as id', 'c.commentDate as commentDate', 'c.content as content', 'u.username as commentatorUsername', 'u.firstName as commentatorFirstName', 
      'u.lastName as commentatorLastName', 'u.projectRole as commentatorProjectRole',
      'u2.username as commentReceiverUsername', 'u2.firstName as commentReceiverFirstName', 'u2.lastName as commentReceiverLastName',
      'u2.projectRole as commentReceiverProjectRole'])
    .orderBy('c.commentDate', 'DESC')/*.offset(skip).limit(take)*/.getRawMany();
  }

  async findTop(query: any): Promise<any> {
    const currentUser = await this.usersRepository.createQueryBuilder('u')
      .where('u.username = :username', { username: query.username })
      .select(['u.id as id'])
      .getRawOne();

    const topFan = await this.commentsRepository.createQueryBuilder('c')
      .innerJoin('user', 'u', 'u.id = c.commentReceiverId')
      .innerJoin('user', 'u2', 'u2.id = c.commentatorId')
      .leftJoin('user_project', 'up', 'up.userId = c.commentatorId')
      .innerJoin('project', 'p', 'p.id = up.projectId')
      .where('c.commentReceiverId = :commentReceiverId', { commentReceiverId: currentUser.id })
      .select(['u2.username as username', 'u2.firstName as firstName', 'u2.lastName as lastName', 'u2.projectRole as projectRole', 'u2.isFemale as isFemale', 'p.name as projectName'])
      .addSelect('COUNT(*) as noOfLikes')
      .groupBy('c.commentatorId')
      .orderBy('noOfLikes', 'DESC')
      .limit(5)
      .getRawMany();
    
    const topRecognized = await this.commentsRepository.createQueryBuilder('c')
      .innerJoin('user', 'u', 'u.id = c.commentatorId')
      .innerJoin('user', 'u2', 'u2.id = c.commentReceiverId')
      .leftJoin('user_project', 'up', 'up.userId = c.commentReceiverId')
      .innerJoin('project', 'p', 'p.id = up.projectId')
      .where('c.commentatorId = :commentatorId', { commentatorId: currentUser.id })
      .select(['u2.username as username', 'u2.firstName as firstName', 'u2.lastName as lastName', 'u2.projectRole as projectRole', 'u2.isFemale as isFemale', 'p.name as projectName'])
      .addSelect('COUNT(*) as noOfLikes')
      .groupBy('c.commentReceiverId')
      .orderBy('noOfLikes', 'DESC')
      .limit(5)
      .getRawMany();
    
    return {
      topFan: topFan,
      topRecognized: topRecognized
    };
  }

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    return await this.commentsRepository.save(createCommentDto);
  }

  async update(updateCommentDto: UpdateCommentDto): Promise<UpdateResult> {
    return await this.commentsRepository.update(updateCommentDto.id, updateCommentDto);
  }
}
