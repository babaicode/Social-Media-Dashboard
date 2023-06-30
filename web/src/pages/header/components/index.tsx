import { useNavigate } from "react-router-dom";
import { HeaderContainer, Logo, Row } from "../styles";
import logoSvg from "../../../assets/logo.svg";
import Button from "../../../common/components/styledButtton";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div onClick={() => navigate(`/`)}>
        <Logo width="91" height="52" src={logoSvg} alt="Logo" />
      </div>
      <div>
        <Row gap="8px">
          <Button
            variant="primary"
            size="small"
            onClick={() => navigate(`/signIn`)}
          >
            Sign In
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
