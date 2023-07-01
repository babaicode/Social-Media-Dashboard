import { Context, Query } from '@nestjs/graphql';
import { Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { UserObject } from './dto/user.dto';
import { UserService } from './user.service';
import { CurrentUser } from 'src/auth/loggedUser.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/dto/jwt-auth.guard';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => UserObject, { name: 'currentUser' })
  async currentUser(@CurrentUser() user: UserObject) {
    return this.userService.findUserByEmail(user.email)
  }

}
