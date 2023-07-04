import { useNavigate } from "react-router-dom";
import { HeaderContainer, Logo, Row, Welcome } from "../styles";
import logoSvg from "../../../assets/logo.svg";
import Button from "../../../common/components/styledButtton";
import { UserDocument, UserQuery } from "../../../gql/graphql";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

export const Header = () => {
  const { data, refetch } = useQuery<UserQuery>(UserDocument);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!data) {
      refetch();
    }
  }, [accessToken]);

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/signin");
    window.location.reload();
  };

  return (
    <HeaderContainer>
      <div onClick={() => navigate(`/`)}>
        <Logo width="91" height="52" src={logoSvg} alt="Logo" />
      </div>
      <div>
        {data && data.user ? (
          <Row>
            <Welcome>
              Welcome,{" "}
              <b>
                {data.user.firstName} {data.user.lastName}
              </b>
              !
            </Welcome>
            <Button variant="primary" size="medium" onClick={onLogout}>
              Logout
            </Button>
          </Row>
        ) : (
          <Row gap="8px">
            <Button
              variant="primary"
              size="small"
              onClick={() => navigate(`/signin`)}
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
        )}
      </div>
    </HeaderContainer>
  );
};
