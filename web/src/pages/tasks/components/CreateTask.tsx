import { useCreateTask } from "../hooks/useCreateTask";
import { Form } from "react-final-form";
import { CreateTask } from "../../../gql/graphql";
import { CreateTaskBox, ButtonBox } from "../styles/styles";
import Button from "../../../common/components/styledButtton";
import InputTaskField from "./InputTaskField";

export const CreateTaskComponent = () => {
  const {
    handleInputChange,
    handleSubmit,
    formValues,
    error,
    loading,
    formInitialValues,
  } = useCreateTask();

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <CreateTaskBox>
      <Form<CreateTask>
        initialValues={formInitialValues}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
          >
            <InputTaskField
              typeOfField="title"
              label="title"
              name="title"
              type="emtitleail"
              value={formValues.title}
              onChange={handleInputChange}
            />
            <InputTaskField
              typeOfField="socialMedia"
              label="socialMedia"
              name="socialMedia"
              type="socialMedia"
              value={formValues.socialMedia}
              onChange={handleInputChange}
            />
            <InputTaskField
              typeOfField="tag"
              label="tag"
              name="tag"
              type="tag"
              value={formValues.tag}
              onChange={handleInputChange}
            />
            <InputTaskField
              typeOfField="description"
              label="description"
              name="description"
              type="description"
              value={formValues.description}
              onChange={handleInputChange}
            />
            <ButtonBox>
              <Button variant="primary" size="medium">
                create task
              </Button>
            </ButtonBox>
          </form>
        )}
      </Form>
    </CreateTaskBox>
  );
};
