import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBoolean } from 'graphql';
import { UserObject } from 'src/user/dto/user.dto';
import { TaskObject } from './task.dto';
import { User } from 'src/user/user.entity';
import { Task } from '../task.entity';

@ObjectType()
export class CreateTaskResponse {
  @Field(() => TaskObject)
  task: TaskObject;
  //   @Field(() => UserObject)
  //   user: UserObject;

  constructor(task: Task) {
    this.task = new TaskObject(task);
    // this.user = new UserObject(user);
  }
}
