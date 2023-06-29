
import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import {
  Field,
  GraphQLISODateTime,
  ObjectType,
  InputType,
} from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';

import { User } from '../user.entity';

@ObjectType('User')
export class UserObject {
  @Field(() => ID)
  id: number;
    
  @Field(() => GraphQLString)
  email: string;

  @Field(() => GraphQLString)
  firstName: string;

  @Field(() => GraphQLString)
  lastName: string;

  @Field(() => GraphQLISODateTime, {
    nullable: true,
    deprecationReason: 'will be removed',
  })
  createdAt: Date;

  @Field(() => GraphQLISODateTime, {
    nullable: true,
    deprecationReason: 'will be removed',
  })
  updatedAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

@InputType()
export class CreateUser {
  @IsNotEmpty()
  @Field()
  firstName: string;

  @IsNotEmpty()
  @Field()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  password: string;

  @IsEmail()
  @Field()
  email: string;
}

@InputType()
export class UpdateUserDto {
  @IsAlpha()
  @Field({ nullable: true })
  readonly name: string;

  @IsString()
  @Field({ nullable: true })
  password: string;
}
