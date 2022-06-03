import { JwtStrategy } from './strategy/jwt.strategy';
import { UsersService } from './../users/users.service';
import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, UsersService, JwtStrategy],
  imports: [
    JwtModule.register({
      secret: 'milk-control-secret-key'
    })
  ]
})
export class AuthModule {}
