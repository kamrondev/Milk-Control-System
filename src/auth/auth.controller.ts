import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }
}
