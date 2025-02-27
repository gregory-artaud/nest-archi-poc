import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserRepository } from './user-repository.interface';

@Injectable()
export class MockUserRepository extends UserRepository {
  users: User[] = [{ id: '123', firstName: 'Grégory', lastName: 'Artaud' }];

  async findById(id: string): Promise<User> {
    const user = this.users.find((u) => u.id === id);

    if (user === undefined) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
