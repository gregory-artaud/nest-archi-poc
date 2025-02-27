import { Injectable } from '@nestjs/common';
import { User } from '../repositories/user-repository.interface';

@Injectable()
export class UserDomainService {
  getFullName(user: Pick<User, 'lastName' | 'firstName'>) {
    const { firstName, lastName } = user;

    return `${firstName} ${lastName}`;
  }
}
