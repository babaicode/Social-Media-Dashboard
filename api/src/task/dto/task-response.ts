import { Field, ObjectType } from '@nestjs/graphql';
import { TaskObject } from './task.dto';
import { Task } from '../task.entity';

@ObjectType()
export class CreateTaskResponse {
  @Field(() => TaskObject)
  task: TaskObject;

  constructor(task: Task) {
    this.task = new TaskObject(task);
  }
}
