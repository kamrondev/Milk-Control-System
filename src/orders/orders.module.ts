import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService]
})
export class OrdersModule {}
