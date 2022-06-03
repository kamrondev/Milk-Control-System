import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { UsersService } from './../users/users.service';
import { PrismaService } from './../prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor (private prisma: PrismaService, userService: UsersService, private jwtService: JwtService) { }

  async login (authDto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { username: authDto.username }
    });
    if (user.password === authDto.password) {
      return this.generateToken(user.id, user.username, user.isAdmin);
    } else {
      return new UnauthorizedException("Incorrect Password");
    }
  }

  async generateToken(id: number, username: string, isAdmin: boolean) {
    return this.jwtService.sign({
      id: id,
      username: username,
      isAdmin: isAdmin
    })
  }
}
