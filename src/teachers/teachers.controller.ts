import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Controller('teachers')
export class TeachersController {
  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return 'This action adds a new teacher';
  }
  @Get()
  findAll(): string {
    return 'This action returns all teachers';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} teacher`;
  }
}
