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

export type LoginResponse = {
  __typename?: "LoginResponse";
  access_token: Scalars["String"]["output"];
  user: User;
};

export type Mutation = {
  __typename?: "Mutation";
  createTask: CreateTaskResponse;
  login: LoginResponse;
  signup: SignUpResponse;
  updateUser: Task;
};

export type MutationCreateTaskArgs = {
  createTask: CreateTask;
};

export type MutationLoginArgs = {
  loginInput: LoginInput;
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
  currentUser: User;
  getAllTasks: Array<Task>;
  getTask: Task;
};

export type QueryGetTaskArgs = {
  id: Scalars["Float"]["input"];
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

export type CreateTaskMutationVariables = Exact<{
  input: CreateTask;
}>;

export type CreateTaskMutation = {
  __typename?: "Mutation";
  createTask: {
    __typename?: "CreateTaskResponse";
    task: {
      __typename?: "Task";
      title: string;
      id: string;
      tag: string;
      createdAt?: any | null;
      description: string;
      socialMedia: string;
    };
  };
};

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  task: UpdateTaskDto;
}>;

export type UpdateTaskMutation = {
  __typename?: "Mutation";
  updateUser: {
    __typename?: "Task";
    id: string;
    title: string;
    tag: string;
    description: string;
    socialMedia: string;
    createdAt?: any | null;
    updatedAt?: any | null;
  };
};

export type GetAllTasksQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllTasksQuery = {
  __typename?: "Query";
  getAllTasks: Array<{
    __typename?: "Task";
    tag: string;
    socialMedia: string;
    title: string;
    description: string;
    createdAt?: any | null;
    id: string;
  }>;
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
    __typename?: "LoginResponse";
    access_token: string;
    user: {
      __typename?: "User";
      firstName: string;
      lastName: string;
      email: string;
    };
  };
};

export const CreateTaskDocument = gql`
  mutation CreateTask($input: CreateTask!) {
    createTask(createTask: $input) {
      task {
        title
        id
        tag
        createdAt
        description
        socialMedia
      }
    }
  }
`;
export type CreateTaskMutationFn = Apollo.MutationFunction<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTaskMutation,
    CreateTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(
    CreateTaskDocument,
    options
  );
}
export type CreateTaskMutationHookResult = ReturnType<
  typeof useCreateTaskMutation
>;
export type CreateTaskMutationResult =
  Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;
export const UpdateTaskDocument = gql`
  mutation UpdateTask($id: ID!, $task: UpdateTaskDto!) {
    updateUser(id: $id, task: $task) {
      id
      title
      tag
      description
      socialMedia
      createdAt
      updatedAt
    }
  }
`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      task: // value for 'task'
 *   },
 * });
 */
export function useUpdateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTaskMutation,
    UpdateTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(
    UpdateTaskDocument,
    options
  );
}
export type UpdateTaskMutationHookResult = ReturnType<
  typeof useUpdateTaskMutation
>;
export type UpdateTaskMutationResult =
  Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;
export const GetAllTasksDocument = gql`
  query getAllTasks {
    getAllTasks {
      tag
      socialMedia
      title
      description
      createdAt
      id
    }
  }
`;

/**
 * __useGetAllTasksQuery__
 *
 * To run a query within a React component, call `useGetAllTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTasksQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllTasksQuery,
    GetAllTasksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllTasksQuery, GetAllTasksQueryVariables>(
    GetAllTasksDocument,
    options
  );
}
export function useGetAllTasksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllTasksQuery,
    GetAllTasksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllTasksQuery, GetAllTasksQueryVariables>(
    GetAllTasksDocument,
    options
  );
}
export type GetAllTasksQueryHookResult = ReturnType<typeof useGetAllTasksQuery>;
export type GetAllTasksLazyQueryHookResult = ReturnType<
  typeof useGetAllTasksLazyQuery
>;
export type GetAllTasksQueryResult = Apollo.QueryResult<
  GetAllTasksQuery,
  GetAllTasksQueryVariables
>;
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
    login(loginInput: $input) {
      access_token
      user {
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
