import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBoolean } from 'graphql';
import { UserObject } from 'src/user/dto/user.dto';
import { User } from 'src/user/user.entity';

@ObjectType()
export class LogoutResponse {
  @Field(() => GraphQLBoolean)
  succeded: boolean;
}

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;
  @Field(() => UserObject)
  user: UserObject;
}

@ObjectType()
export class SignUpResponse {
  @Field(() => UserObject)
  user: UserObject;

  constructor(user: User) {
    this.user = new UserObject(user);
  }
}
