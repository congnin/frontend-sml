import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

import { DateTimeHelper } from '../common/datetime.helper';

import { Project } from '../entities/project.entity';
import { User } from '../entities/user.entity';
import { UserProject } from '../entities/user-project.entity';

import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(UserProject)
    private userProjectsRepository: Repository<UserProject>
  ) {}

  async findAll(loggingUser: any) {
    const currentDate = new Date();
    const currentFormattedDate = DateTimeHelper.ToYYYYMMddString(currentDate);

    const currentUser = await this.usersRepository.findOne({ 
      where: { username: loggingUser.given_name.toLowerCase() } 
    });

    var userProjects = await this.userProjectsRepository.createQueryBuilder('up')
      .leftJoin('project', 'p', 'p.id = up.projectId')
      .where('up.isDeleted = :isDeleted', { isDeleted: false })
      .select(['p.id as projectId', 'p.name as projectName', 'p.code as projectCode', 'null as users'])
      .addSelect('COUNT(*) as noOfUsers')
      .groupBy('up.projectId')
      .getRawMany();
    
    var users = await this.userProjectsRepository.createQueryBuilder('up')
      .leftJoin('user', 'u', 'u.id = up.userId')
      .leftJoin('comment', 'c', 'c.commentReceiverId = up.userId and c.commentatorId = :commentatorId and c.commentDate >= :commentDate and c.content != :content', {
        commentatorId: currentUser.id, commentDate: currentFormattedDate, content: ''
      })
      .where('up.isDeleted = :isDeleted', { isDeleted: false })
      .select(['u.id as userId', 'u.username as username', 'u.firstName as firstName', 'u.lastName as lastName', 'u.projectRole as projectRole', 'u.joinedAt as joinedAt', 'u.isFemale as isFemale', 'up.projectId as projectId',
        'c.content as content', 'c.isDeleted as commentIsDeleted', 'c.id as commentId'])
      .addSelect(subQuery => {
        return subQuery.where('c.isDeleted = :isDeleted', { isDeleted: false })
          .andWhere('c.content != :content', { content: '' })
          .andWhere('c.commentatorId = u.id')
          .select('COUNT(*) as noOfLikes')
          .groupBy('c.commentatorId')
          .from('comment', 'c')
      }, 'noOfLikes')
      .addSelect(subQuery => {
        return subQuery.where('c.isDeleted = :isDeleted', { isDeleted: false })
          .andWhere('c.content != :content', { content: '' })
          .andWhere('c.commentReceiverId = u.id')
          .select('COUNT(*) as noOfReceiveLikes')
          .groupBy('c.commentReceiverId')
          .from('comment', 'c')
      }, 'noOfReceiveLikes')
      .orderBy('noOfReceiveLikes', 'DESC')
      .addOrderBy('u.firstName')
      .getRawMany();
    
    for (let index = 0; index < userProjects.length; index++) {
      userProjects[index].users = users.filter((value) => {
        return value.projectId === userProjects[index].projectId
      })
    }
    return userProjects;
  }

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    return await this.projectsRepository.save(createProjectDto);
  }

  async update(updateProjectDto: UpdateProjectDto): Promise<UpdateResult> {
    return await this.projectsRepository.update(updateProjectDto.id, updateProjectDto);
  }
}
