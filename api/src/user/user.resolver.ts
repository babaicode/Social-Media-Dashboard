import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { UserObject } from './dto/user.dto';
import { UserService } from './user.service';
import { CurrentUser } from 'src/auth/loggedUser.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/dto/jwt-auth.guard';
import { TaskObject } from 'src/task/dto/task.dto';

@UseGuards(JwtAuthGuard)
@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserObject, { name: 'user' })
  async currentUser(@CurrentUser() user: UserObject) {
    return this.userService.findUserByEmail(user.email);
  }

  @Query(() => [TaskObject], { name: 'tasksOfCurrentUser' })
  async tasksOfCurrentUser(@CurrentUser() user: UserObject) {
    return this.userService.findTasksOfUser(user.id);
  }
}
