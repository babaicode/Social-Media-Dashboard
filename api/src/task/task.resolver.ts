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
import { CurrentUser } from 'src/auth/loggedUser.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/dto/jwt-auth.guard';

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

  @Query(() => [TaskObject]) // Define the return type as an array of TaskObject
  async getAllTasks(): Promise<TaskObject[]> {
    const tasks = await this.taskService.findAllTasks();
    return tasks.map((task) => new TaskObject(task));
  }

  @Query(() => TaskObject)
  async getTask(@Args('id') id: number) {
    const task = await this.taskService.findOneById(id);
    return new TaskObject(task);
  }
  @UseGuards(JwtAuthGuard)
  @Mutation(() => CreateTaskResponse)
  async createTask(
    @Args('createTask') createTask: CreateTask,
    @CurrentUser() user: User,
  ): Promise<CreateTaskResponse> {
    return new CreateTaskResponse(
      await this.taskService.createTask(createTask, user),
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
