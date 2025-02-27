import { Injectable } from '@nestjs/common';
import { EventRepository } from './repositories/event-repository.interface';
import { CreateDto } from './dtos/create.dto';
import { EventDomainService } from './domains/event-domain.service';
import { UpdateByIdDto } from './dtos/update-by-id.dto';
import { UserRepository } from '../users/repositories/user-repository.interface';
import { UserUpdateEventDomainService } from './domains/user-update-domain.service';

@Injectable()
export class EventService {
  constructor(
    private readonly eventRepository: EventRepository,
    private readonly userRepository: UserRepository,
    private readonly eventDomainService: EventDomainService,
    private readonly userUpdateEventDomainService: UserUpdateEventDomainService,
  ) {}

  async findAll() {
    return this.eventRepository.findAll();
  }

  async create(createData: CreateDto) {
    this.eventDomainService.checkNameRules(createData.name);

    return this.eventRepository.create(createData);
  }

  async updateById(eventId: string, updateData: UpdateByIdDto) {
    const { userId: userId, ...eventData } = updateData;
    const user = await this.userRepository.findById(userId);
    const event = this.userUpdateEventDomainService.build(eventData, user);

    return this.eventRepository.updateById(eventId, event);
  }
}
