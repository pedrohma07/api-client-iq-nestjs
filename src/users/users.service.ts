import { Injectable } from '@nestjs/common';
import { User } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    } else {
      return user;
    }
  }

  async create(createUserDto: any) {
    const user = this.userRepository.create(createUserDto);

    return this.userRepository.save(user);
  }

  async update(id: string, updateUserDto: any) {
    const user = await this.userRepository.preload({
      ...updateUserDto,
      id,
    });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    } else {
      return this.userRepository.save(user);
    }
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    } else {
      return this.userRepository.remove(user);
    }
  }
}
