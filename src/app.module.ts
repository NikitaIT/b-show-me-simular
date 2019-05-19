import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchController } from './search/search.controller';
import { ResumeController } from './resume/resume.controller';
import { VacationController } from './vacation/vacation.controller';

@Module({
  imports: [],
  controllers: [AppController, SearchController, ResumeController, VacationController],
  providers: [AppService],
})
export class AppModule {}
