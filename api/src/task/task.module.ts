import { Module } from '@nestjs/common';
import { TasksService } from './task.service';
import { TasksResolver } from './task.resolver';

@Module({
  providers: [TasksService, TasksResolver],
})
export class TasksModule {}
