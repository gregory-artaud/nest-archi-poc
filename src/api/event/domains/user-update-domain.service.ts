import { User } from 'src/api/users/repositories/user-repository.interface';
import { UserDomainService } from 'src/api/users/domains/user-domain.service';
import { UpdateByIdDto } from '../dtos/update-by-id.dto';
import { EventDomainService } from './event-domain.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserUpdateEventDomainService {
  constructor(
    private readonly userDomainService: UserDomainService,
    private readonly eventDomainService: EventDomainService,
  ) {}

  build(data: Omit<UpdateByIdDto, 'userId'>, by: User) {
    this.eventDomainService.checkNameRules(data.name);
    const fullName = this.userDomainService.getFullName(by);

    return {
      ...data,
      lastEditedBy: fullName,
    };
  }
}
