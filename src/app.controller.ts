import { UsersService } from './users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { GetCurrentUserById } from './auth/utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private userService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/me')
  async me(@GetCurrentUserById() id: number) {
    return await this.userService.findOne(id);
  }
}
