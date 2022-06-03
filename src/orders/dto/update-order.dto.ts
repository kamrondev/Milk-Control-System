import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  id: number;
  name: string;
  phone: string;
  addressId: number;
  quantity: number;
  price: number;
  userId: number;
}
