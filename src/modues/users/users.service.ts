import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private readonly client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    });
  }

  create(createUserDto: CreateUserDto) {
    return this.client.send<string, CreateUserDto>('createUser', createUserDto);
  }

  findAll() {
    return this.client.send<string, string>('findAllUsers', '');
  }

  findOne(id: string) {
    return this.client.send<string, string>('findOneUser', id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.client.send<string, UpdateUserDto>('updateUser', {
      id,
      ...updateUserDto,
    });
  }

  remove(id: string) {
    return this.client.send<string, string>('removeUser', id);
  }
}
