import {
  Field,
  ObjectType,
  ID,
  GraphQLISODateTime,
  InputType,
} from '@nestjs/graphql';
import { Task } from '../task.entity';
import { UserObject } from 'src/user/dto/user.dto';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@ObjectType('Task')
export class TaskObject {
  @Field(() => ID)
  id: number;

  @Field(() => UserObject)
  user: UserObject;

  @Field()
  title: string;

  @Field()
  tag: string;

  @Field()
  description: string;

  @Field()
  socialMedia: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  createdAt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedAt: Date;

  constructor(task: Task) {
    this.id = task.id;
    this.user = task.user;
    this.title = task.title;
    this.tag = task.tag;
    this.description = task.description;
    this.socialMedia = task.socialMedia;
    this.createdAt = task.createdAt;
    this.updatedAt = task.updatedAt;
  }
}

@InputType()
export class CreateTask {
  @IsNotEmpty()
  @Field()
  title: string;

  @Field({ nullable: true })
  tag: string;

  @Field({ nullable: true })
  description: string;

  @IsNotEmpty()
  @Field()
  socialMedia: string;
}

@InputType()
export class UpdateTaskDto {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  tag: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  socialMedia: string;
}
