import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './user.entity';
import { TasksService } from 'src/task/task.service';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
  providers: [UserService, UserResolver, TasksService],
  exports: [UserService],
})
export class UserModule {}
