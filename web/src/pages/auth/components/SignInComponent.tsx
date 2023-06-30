import { Form } from "react-final-form";
import { useSignIn } from "../hooks/useSignIn";
import { LoginInput } from "../../../gql/graphql";
import InputField from "./InputField";
import { ButtonBox } from "../styles/ButtonBox";
import Button from "../../../common/components/styledButtton";

const SignInComponent = () => {
  const { handleInputChange, handleSubmit, formValues, error, loading } =
    useSignIn();

  if (error) {
    return <p>{error.message}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Form<LoginInput>
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
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
              login
            </Button>
          </ButtonBox>
        </form>
      )}
    </Form>
  );
};

export default SignInComponent;
