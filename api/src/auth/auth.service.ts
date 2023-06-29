import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUser } from 'src/user/dto/user.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginInput } from './dto/login-input';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
      ) {}
      
      async validateCredentials(
        email: string,
        password: string,
      ): Promise<Omit<User, 'password'> | null> {
        const user = await this.userService.findUserByEmail(email);
    
        if (!user) throw new NotFoundException(`User does not exist.`);
    
        const valid = await bcrypt.compare(password, user?.password);
    
        if (user && valid) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }

    async signup(createUser: CreateUser): Promise<User> {
        const user = await this.userService.findUserByEmail(createUser.email);
    
        if (user) {
          throw new Error('User already exist');
        }
        const password = await bcrypt.hash(createUser.password, 10);
        return this.userService.createUser({
          ...createUser,
          password,
        });
      }

      async login(userLogin: LoginInput) {
        const user = await this.validateCredentials(
          userLogin.email,
          userLogin.password,
        );
    
        if (!user) throw new NotFoundException(`Invalid credentials.`);
    
        const result = {
          user,
        };
        return result;
      }
}
