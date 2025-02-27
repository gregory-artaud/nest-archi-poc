import { Injectable, NotFoundException } from '@nestjs/common';
import {
  Event,
  EventCreateInput,
  EventRepository,
  EventUpdateInput,
} from './event-repository.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class MockEventRepository extends EventRepository {
  events: Event[] = [
    { name: 'Mon super event', id: '123', lastEditedBy: null },
  ];

  async findAll() {
    return Promise.resolve(this.events);
  }

  async create(data: EventCreateInput) {
    const { name } = data;
    const id = randomUUID();
    const newEvent: Event = {
      name,
      id,
      lastEditedBy: null,
    };

    this.events.push(newEvent);
    return Promise.resolve(newEvent);
  }

  async updateById(id: Event['id'], data: EventUpdateInput): Promise<Event> {
    const indexToUpdate = this.events.findIndex((e) => e.id === id);
    const eventToUpdate = this.events[indexToUpdate];

    if (indexToUpdate === -1) {
      throw new NotFoundException('Event not found');
    }

    this.events[indexToUpdate] = { ...eventToUpdate, ...data };
    return this.events[indexToUpdate];
  }
}
