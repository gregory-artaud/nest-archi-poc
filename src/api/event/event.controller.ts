import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateDto } from './dtos/create.dto';
import { UpdateByIdDto } from './dtos/update-by-id.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Post()
  create(@Body() payload: CreateDto) {
    return this.eventService.create(payload);
  }

  @Put(':id')
  updateById(@Param('id') id: string, @Body() payload: UpdateByIdDto) {
    return this.eventService.updateById(id, payload);
  }
}
