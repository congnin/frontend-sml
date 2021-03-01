import { Controller, Get, Post, Put, Body, Req } from '@nestjs/common';
import { UpdateResult } from 'typeorm';

import { ProjectsService } from './projects.service';

import { Project } from '../entities/project.entity';

import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService
  ) {}

  @Get()
  async find(@Req() req): Promise<any> {
    const projects = await this.projectsService.findAll(req.user);
    return {
      data: projects,
      cre: req.user.given_name.toLowerCase()
    }
  }

  @Post()
  create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectsService.create(createProjectDto);
  }

  @Put()
  update(@Body() updateProjectDto: UpdateProjectDto): Promise<UpdateResult> {
    return this.projectsService.update(updateProjectDto);
  }
}
