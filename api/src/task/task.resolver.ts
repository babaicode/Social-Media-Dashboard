import {
  Args,
  Parent,
  ResolveField,
  ResolveReference,
  Resolver,
  Query,
  Mutation,
  ID,
} from '@nestjs/graphql';
import { TasksService } from './task.service';
import { CreateTask, TaskObject, UpdateTaskDto } from './dto/task.dto';
import { CreateTaskResponse } from './dto/task-response';
import { User } from 'src/user/user.entity';

@Resolver(() => TaskObject)
export class TasksResolver {
  constructor(private readonly taskService: TasksService) {}

  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: number }) {
    if (reference.__typename === 'Task') {
      const task = await this.taskService.findOneById(reference.id);

      if (task) {
        return new TaskObject(task);
      }
    }
    return null;
  }

  @ResolveField(() => TaskObject)
  async user(@Parent() parent: TaskObject) {
    const user = (await this.taskService.findOneById(parent.id)).user;
    console.log(user);
    return user;
  }

  @Query(() => TaskObject)
  async getTask(@Args('id') id: number) {
    const task = await this.taskService.findOneById(id);
    return new TaskObject(task);
  }

  @Mutation(() => CreateTaskResponse)
  async createTask(
    @Args('createTask') createTask: CreateTask,
  ): Promise<CreateTaskResponse> {
    return new CreateTaskResponse(
      await this.taskService.createTask(createTask),
    );
  }

  @Mutation(() => TaskObject)
  async updateUser(
    @Args('id', { type: () => ID }) id: number,
    @Args('task') task: UpdateTaskDto,
  ): Promise<TaskObject> {
    const taskEntity = await this.taskService.updateTask(id, task);
    return taskEntity ? new TaskObject(taskEntity) : null;
  }
}
