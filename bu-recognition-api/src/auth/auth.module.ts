import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';

import { AzureAdStrategy } from './strategies/azuread.strategy';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, AzureAdStrategy],
  controllers: [AuthController],
  exports: [PassportModule]
})
export class AuthModule {}
