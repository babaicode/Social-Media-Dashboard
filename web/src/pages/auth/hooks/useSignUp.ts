import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  CreateUser,
  SignupDocument,
  SignupMutationResult,
} from "../../../gql/graphql";
const formInitialValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
};

export const useSignUp = () => {
  const [signup, { error }] = useMutation<SignupMutationResult>(SignupDocument);

  const [formValues, setFormValues] = useState<CreateUser>(formInitialValues);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    console.log(value);
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues, "formValues");
  }

  async function handleSubmit(values: CreateUser) {
    await signup({ variables: { input: values } });
    console.log(values, "create user");
    setFormValues(formInitialValues);
  }
  return {
    handleInputChange,
    handleSubmit,
    error,
    formValues,
    formInitialValues,
  };
};
