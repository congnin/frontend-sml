import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Project } from '../entities/project.entity';
import { User } from '../entities/user.entity';
import { UserProject } from '../entities/user-project.entity';

import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project, User, UserProject])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [TypeOrmModule, ProjectsService]
})
export class ProjectsModule {}
