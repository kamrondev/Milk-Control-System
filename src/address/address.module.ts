import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';

@Module({
  controllers: [AddressController],
  providers: [AddressService, PrismaService]
})
export class AddressModule {}
