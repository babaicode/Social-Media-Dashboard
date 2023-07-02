import { useCreateTask } from "../hooks/useCreateTask";
import InputField from "../../auth/components/InputField";
import { Form } from "react-final-form";
import { CreateTask } from "../../../gql/graphql";
import { CreateTaskBox } from "../styles";
import Button from "../../../common/components/styledButtton";

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
          <form onSubmit={props.handleSubmit}>
            <InputField
              label="title"
              name="title"
              type="emtitleail"
              value={formValues.title}
              onChange={handleInputChange}
            />
            <InputField
              label="socialMedia"
              name="socialMedia"
              type="socialMedia"
              value={formValues.socialMedia}
              onChange={handleInputChange}
            />
            <InputField
              label="tag"
              name="tag"
              type="tag"
              value={formValues.tag}
              onChange={handleInputChange}
            />
            <InputField
              label="description"
              name="description"
              type="description"
              value={formValues.description}
              onChange={handleInputChange}
            />
            <Button variant="primary" size="medium">
              create task
            </Button>
          </form>
        )}
      </Form>
    </CreateTaskBox>
  );
};
