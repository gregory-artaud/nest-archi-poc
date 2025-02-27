import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user-repository.interface';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findById(id: string) {
    return this.userRepository.findById(id);
  }
}
