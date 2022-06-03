import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { customAlphabet } from 'nanoid';

@Injectable()
export class UsersService {
  constructor (private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const nanoid = customAlphabet('1234567890', 5);
    return await this.prisma.user.create({
      data: {
        username: `s${nanoid()}`,
        password: `p${nanoid()}`,
        ...createUserDto
      }
    })
  }

  async findAll() {
    return await this.prisma.user.findMany({
      include: {
        orders: true
      }
    })
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: { id: id },
      include: {
        orders: {
          include: {
            address: true
          }
        },
      }
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id: id },
      data: { ...updateUserDto }
    })
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: { id: id }
    })
  }
}
