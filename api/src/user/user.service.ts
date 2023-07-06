import { EntityRepository, wrap } from '@mikro-orm/core';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUser, UpdateUserDto } from './dto/user.dto';
import { EntityManager } from '@mikro-orm/postgresql';
import { Task } from 'src/task/task.entity';
import { TasksService } from 'src/task/task.service';

@Injectable()
export class UserService {
  private readonly usersRepository: EntityRepository<User>;
  constructor(
    private readonly em: EntityManager,
    private readonly taskService: TasksService,
  ) {
    this.usersRepository = this.em.getRepository(User);
  }
  findAllUsers() {
    return this.usersRepository.findAll();
  }

  async findUserById(id: number) {
    const user = await this.usersRepository.findOne({ id });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async createUser(user: CreateUser): Promise<User> {
    const createdUser = this.usersRepository.create(user);
    await this.em.persistAndFlush(createdUser);
    return createdUser;
  }

  async updateUser(id: number, user: UpdateUserDto) {
    const existingUser = await this.findUserById(id);
    wrap(existingUser).assign(user);
    await this.em.persistAndFlush(existingUser);
    return existingUser;
  }

  async deleteUser(id: number) {
    const user = await this.findUserById(id);
    return this.em.removeAndFlush(user);
  }

  async findUserByFullName(fullName: string) {
    const user = await this.usersRepository.findOne({
      firstName: fullName.split(' ')[0],
      lastName: fullName.split(' ')[1],
    });
    return user;
  }
  async findUserByFirstName(firstName: string) {
    const user = await this.usersRepository.findOne({ firstName });
    return user;
  }

  async findUserByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    return user;
  }

  async findTasksOfUser(userId: number): Promise<Task[]> {
    return this.taskService.findTasksByUserId(userId);
  }
}
