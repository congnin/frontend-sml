import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AzureADGuard } from './guards/azuread.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Get()
  findAdUser(@Req() req): any {
    return req.user;
  }

  @Post('ad-login')
  @UseGuards(AzureADGuard)
  async adLogin(@Req() req): Promise<any> {
    return this.authService.adLogin(req.user)
  }
}
