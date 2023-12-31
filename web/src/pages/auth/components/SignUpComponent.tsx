import { useSignUp } from "../hooks/useSignUp";
import { Form } from "react-final-form";
import { CreateUser } from "../../../gql/graphql";
import InputField from "./InputField";
import { ButtonBox } from "../styles/ButtonBox";
import Button from "../../../common/components/styledButtton";

const SignUpComponent = () => {
  const {
    handleInputChange,
    handleSubmit,
    error,
    formValues,
    formInitialValues,
  } = useSignUp();

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Form<CreateUser> initialValues={formInitialValues} onSubmit={handleSubmit}>
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <InputField
            label="First Name"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
          />
          <InputField
            label="Last Name"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
          <ButtonBox mt={"32px"}>
            <Button variant="primary" size="medium">
              register
            </Button>
          </ButtonBox>
        </form>
      )}
    </Form>
  );
};

export default SignUpComponent;
