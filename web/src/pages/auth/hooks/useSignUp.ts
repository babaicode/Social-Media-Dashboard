import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  CreateUser,
  SignupDocument,
  SignupMutationResult,
} from "../../../gql/graphql";
import { useNavigate } from "react-router-dom";
const formInitialValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
};

export const useSignUp = () => {
  const [signup, { error }] = useMutation<SignupMutationResult>(SignupDocument);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<CreateUser>(formInitialValues);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    console.log(value);
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues, "formValues");
  }

  async function handleSubmit() {
    console.log({ variables: { input: formValues } }, "values");
    const re = await signup({ variables: { input: formValues } });
    if (re.data) navigate("/signin");
    setFormValues(formValues);
  }
  return {
    handleInputChange,
    handleSubmit,
    error,
    formValues,
    formInitialValues,
  };
};
