import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { EventRepository } from './repositories/event-repository.interface';
import { MockEventRepository } from './repositories/mock-event-repository.service';
import { EventDomainService } from './domains/event-domain.service';
import { UserModule } from '../users/user.module';
import { UserUpdateEventDomainService } from './domains/user-update-domain.service';

@Module({
  imports: [UserModule],
  controllers: [EventController],
  providers: [
    EventService,
    EventDomainService,
    UserUpdateEventDomainService,
    { provide: EventRepository, useClass: MockEventRepository },
  ],
})
export class EventModule {}
