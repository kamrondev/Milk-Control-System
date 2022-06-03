import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  isAdmin: boolean;
}
