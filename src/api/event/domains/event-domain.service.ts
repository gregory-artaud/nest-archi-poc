import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class EventDomainService {
  checkNameRules(name: string) {
    const isOk = name.startsWith('M');

    if (!isOk) {
      throw new BadRequestException("Event name must start with an 'M'");
    }
  }
}
