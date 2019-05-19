import { Controller, Delete, Get, Param, Body, Post, Put, Query } from '@nestjs/common';
import { CreateResumeDto, UpdateResumeDto } from './dto';

@Controller('resume')
export class ResumeController {
  @Post()
  create(@Body() dto: CreateResumeDto) {
    return 'This action adds a new resume';
  }

  @Get()
  findAll(@Query() query: { limit: number }) {
    return `This action returns all resumes (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} resume`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateResumeDto) {
    return `This action updates a #${id} resume`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} resume`;
  }
}
