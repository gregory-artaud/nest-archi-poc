import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repositories/user-repository.interface';
import { MockUserRepository } from './repositories/mock-user-repository.service';
import { UserDomainService } from './domains/user-domain.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserDomainService,
    { provide: UserRepository, useClass: MockUserRepository },
  ],
  exports: [UserRepository, UserDomainService],
})
export class UserModule {}
