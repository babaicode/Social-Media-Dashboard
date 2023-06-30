import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CreateUser } from 'src/user/dto/user.dto';
import { SignInResponse, SignUpResponse } from './dto/auth-response';
import { LoginInput } from './dto/login-input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => SignUpResponse)
  async signup(
    @Args('createUser') createUser: CreateUser,
  ): Promise<SignUpResponse> {
    return new SignUpResponse(await this.authService.signup(createUser));
  }

  @Mutation(() => SignInResponse)
  async login(@Args('loginUserInput') loginInput: LoginInput) {
    return await this.authService.login(loginInput);
  }
}
