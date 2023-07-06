import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { Task } from './task.entity';
import { CreateTask, UpdateTaskDto } from './dto/task.dto';
import { wrap, EntityRepository } from '@mikro-orm/core';

@Injectable()
export class TasksService {
  private readonly taskRepository: EntityRepository<Task>;
  constructor(private readonly em: EntityManager) {
    this.taskRepository = this.em.getRepository(Task);
  }

  async findOneById(id: number): Promise<Task> {
    return this.taskRepository.findOne(id);
  }

  async filterTasksByTag(): Promise<Task[]> {
    // TODO inplement filter

    return this.taskRepository.findAll({ populate: ['tag'] });
  }

  async findAllTasks(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }

  async updateTask(id: number, task: UpdateTaskDto): Promise<Task> {
    const existingTask = await this.findOneById(id);
    wrap(existingTask).assign(task);
    await this.em.persistAndFlush(existingTask);
    return existingTask;
  }

  async createTask(createTask: CreateTask, user: User): Promise<Task> {
    const createdTask = this.taskRepository.create({
      ...createTask,
      user: user,
    });
    await this.em.persistAndFlush(createdTask);
    return createdTask;
  }

  async findTasksByUserId(userId: number): Promise<Task[]> {
    return this.em.find(Task, { user: userId });
  }
}
