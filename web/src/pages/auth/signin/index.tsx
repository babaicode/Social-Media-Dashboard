import SignInComponent from "../components/SignInComponent";
import { FullLayoutBackground } from "../styles/FullLayoutBackground";
import { SignInBox } from "../styles/SignInBox";

const SignIn = () => {
  return (
    <>
      <FullLayoutBackground>
        <SignInBox>
          <SignInComponent />
        </SignInBox>
      </FullLayoutBackground>
    </>
  );
};

export default SignIn;
