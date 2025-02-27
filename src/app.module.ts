import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './api/event/event.module';
import { UserModule } from './api/users/user.module';

@Module({
  imports: [EventModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
