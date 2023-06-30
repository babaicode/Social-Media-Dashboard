import gql from "graphql-tag";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type CreateTask = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  socialMedia: Scalars["String"]["input"];
  tag?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type CreateTaskResponse = {
  __typename?: "CreateTaskResponse";
  task: Task;
};

export type CreateUser = {
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type LoginInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createTask: CreateTaskResponse;
  login: SignInResponse;
  signup: SignUpResponse;
  updateUser: Task;
};

export type MutationCreateTaskArgs = {
  createTask: CreateTask;
};

export type MutationLoginArgs = {
  loginUserInput: LoginInput;
};

export type MutationSignupArgs = {
  createUser: CreateUser;
};

export type MutationUpdateUserArgs = {
  id: Scalars["ID"]["input"];
  task: UpdateTaskDto;
};

export type Query = {
  __typename?: "Query";
  getTask: Task;
  user: User;
};

export type QueryGetTaskArgs = {
  id: Scalars["Float"]["input"];
};

export type SignInResponse = {
  __typename?: "SignInResponse";
  access_token: Scalars["String"]["output"];
  user: User;
};

export type SignUpResponse = {
  __typename?: "SignUpResponse";
  user: User;
};

export type Task = {
  __typename?: "Task";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  socialMedia: Scalars["String"]["output"];
  tag: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  user: User;
};

export type UpdateTaskDto = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  socialMedia?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  /** @deprecated will be removed */
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  /** @deprecated will be removed */
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type SignupMutationVariables = Exact<{
  input: CreateUser;
}>;

export type SignupMutation = {
  __typename?: "Mutation";
  signup: {
    __typename?: "SignUpResponse";
    user: {
      __typename?: "User";
      id: string;
      email: string;
      firstName: string;
      lastName: string;
    };
  };
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "SignInResponse";
    user: {
      __typename?: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
  };
};

export const SignupDocument = gql`
  mutation Signup($input: CreateUser!) {
    signup(createUser: $input) {
      user {
        id
        email
        firstName
        lastName
      }
    }
  }
`;
export type SignupMutationFn = Apollo.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    options
  );
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(loginUserInput: $input) {
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
