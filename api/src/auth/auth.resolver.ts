import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CreateUser } from 'src/user/dto/user.dto';
import { LoginResponse, SignInResponse } from './dto/auth-response';
import { LoginInput } from './dto/login-input';

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @Mutation(() => SignInResponse)
  async signup(
    @Args('createUser') createUser: CreateUser,
  ): Promise<SignInResponse> {
    return new SignInResponse(await this.authService.signup(createUser));
  }

  @Mutation(() => LoginResponse)
  async login(@Args('loginUserInput') loginUserInput: LoginInput) {
    return await this.authService.login(loginUserInput);
  }
}
