import { Query } from '@nestjs/graphql';
import { Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { UserObject } from './dto/user.dto';
import { UserService } from './user.service';
import { CurrentUser } from 'src/auth/loggedUser.decorator';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserObject, { name: 'user' })
  async findOne(@CurrentUser() user: UserObject) {
    console.log(user, 'currentuser');
    const userEntity = await this.userService.findUserByEmail(user.email);
    return userEntity ? new UserObject(userEntity) : null;
  }
}
