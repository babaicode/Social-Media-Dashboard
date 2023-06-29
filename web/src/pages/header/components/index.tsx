import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, Logo, Row } from "../styles";
import logoSvg from "../../../assets/logo.svg";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div onClick={() => navigate(`/`)}>
        <Logo width="70" height="40" src={logoSvg} alt="Logo"></Logo>
      </div>
      <div>
        <Row gap="8px">
          <Button
            variant="primary"
            size="small"
            onClick={() => navigate(`/login`)}
          >
            Log in
          </Button>
          <Button
            variant="secondary"
            size="small"
            onClick={() => navigate(`/signup`)}
          >
            Sign up
          </Button>
        </Row>
      </div>
    </HeaderContainer>
  );
};
