import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { TeachersController } from './teachers/teachers.controller';

@Module({
  //code
  imports: [],
  controllers: [AppController, UsersController, TeachersController],
  providers: [AppService],
})
export class AppModule {}
