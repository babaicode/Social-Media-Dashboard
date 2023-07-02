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

  async function handleSubmit() {
    console.log("handleSubmit called");
    try {
      const response = await login({ variables: { input: formValues } });
      console.log(formValues, "formValues");

      if (response.data?.login) {
        const userEmail = response.data.login.user.email;
        console.log("User logged in with email:", userEmail);
        console.log(response.data.login.access_token, "token");
        localStorage.setItem("accessToken", response.data.login.access_token);
        navigate(`/`);
      }
    } catch (error) {
      console.log("Error in handleSubmit:", error);
    }
  }

  return {
    handleInputChange,
    handleSubmit,
    formValues,
    error,
    loading,
  };
};
