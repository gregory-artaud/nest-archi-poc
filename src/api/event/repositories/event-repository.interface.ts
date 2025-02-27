export type Event = {
  id: string;
  name: string;
  lastEditedBy: string | null;
};

export type EventCreateInput = Pick<Event, 'name'>;
export type EventUpdateInput = Partial<Omit<Event, 'id' | 'lastEditedBy'>>;

export abstract class EventRepository {
  abstract findAll(): Promise<Event[]>;
  abstract create(data: EventCreateInput): Promise<Event>;
  abstract updateById(id: Event['id'], data: EventUpdateInput): Promise<Event>;
}
