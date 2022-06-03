import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) { }

  create(createAddressDto: CreateAddressDto) {
    return this.prisma.address.create({
      data: {
        ...createAddressDto
      }
    })
  }

  findAll() {
    return this.prisma.address.findMany();
  }

  findOne(id: number) {
    return this.prisma.address.findUnique({
      where: { id: id }
    })
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return this.prisma.address.update({
      where: { id: id },
      data: {
        ...updateAddressDto
      }
    })
  }

  remove(id: number) {
    return this.prisma.address.delete({
      where: { id: id }
    })
  }
}
