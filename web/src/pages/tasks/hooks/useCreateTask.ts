import { useMutation } from "@apollo/client";
import {
  CreateTask,
  CreateTaskDocument,
  CreateTaskMutation,
} from "../../../gql/graphql";
import { useState } from "react";

const formInitialValues = {
  tag: "",
  description: "",
  title: "",
  socialMedia: "",
};

export const useCreateTask = () => {
  const [createTask, { loading, error, data }] =
    useMutation<CreateTaskMutation>(CreateTaskDocument);

  const [formValues, setFormValues] = useState<CreateTask>(formInitialValues);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    console.log(value, "value ");

    setFormValues({ ...formValues, [name]: value });
  }

  async function handleSubmit() {
    console.log({ variables: { input: formValues } }, "values");
    await createTask({ variables: { input: formValues } });

    setFormValues(formInitialValues);
  }

  return {
    handleInputChange,
    handleSubmit,
    formValues,
    error,
    loading,
    formInitialValues,
  };
};
