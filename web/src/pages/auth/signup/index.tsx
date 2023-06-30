import SignUpComponent from "../components/SignUpComponent";
import { FullLayoutBackground } from "../styles/FullLayoutBackground";

import { SignUpBox } from "../styles/SignUpBox";

const SignUp = () => {
  return (
    <>
      <FullLayoutBackground>
        <SignUpBox>
          <SignUpComponent />
        </SignUpBox>
      </FullLayoutBackground>
    </>
  );
};

export default SignUp;
