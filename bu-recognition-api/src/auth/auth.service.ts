import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService
  ) {}

  async adLogin(user: any): Promise<any> {
    const checkingUser = await this.usersService.findByUsername(user.given_name.toLowerCase());
    if (checkingUser) {
      return { message: 'success' }
    }
    return { message: 'unauthorized' };
  }
}
