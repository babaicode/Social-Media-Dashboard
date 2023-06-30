import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDocument, LoginInput, LoginMutation } from "../../../gql/graphql";

const formInitialValues = {
  email: "",
  password: "",
};
export const useSignIn = () => {
  const [login, { loading, error, data }] =
    useMutation<LoginMutation>(LoginDocument);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<LoginInput>(formInitialValues);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  async function handleSubmit(values: LoginInput) {
    await login({ variables: { input: values } });
    console.log(formValues, "formValues");
  }

  if (data?.login) {
    navigate(`/`);
  }
  return {
    handleInputChange,
    handleSubmit,
    formValues,
    error,
    loading,
  };
};
