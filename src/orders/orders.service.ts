import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor (private prisma: PrismaService) { }

  async create(createOrderDto: CreateOrderDto) {
    return await this.prisma.order.create({
      data: {
        ...createOrderDto
      }
    })
  }

  async findAll() {
    return await this.prisma.order.findMany({
      include: {
        address: true
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.order.findUnique({
      where: { id: id }
    })
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.prisma.order.update({
      where: { id: id },
      data: { ...updateOrderDto }
    })
  }

  async remove(id: number) {
    return await this.prisma.order.delete({
      where: { id: id }
    })
  }
}
