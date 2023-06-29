import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserObject } from '../user/dto/user.dto';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): UserObject => {
    const ctx = GqlExecutionContext.create(context).getContext();

    return ctx.req && ctx.req.user;
  },
);
