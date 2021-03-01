import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reflector } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { CommentsModule } from './comments/comments.module';

import { AzureADGuard } from './auth/guards/azuread.guard';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, UsersModule, ProjectsModule, CommentsModule],
  controllers: [AppController],
  providers: [{
    provide: 'APP_GUARD',
    useFactory: ref => new AzureADGuard(ref),
    inject: [Reflector],
  }, AppService],
})
export class AppModule {}
