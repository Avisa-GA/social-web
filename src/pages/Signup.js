import { StyledMain } from "../styles";
import UserForm from "../components/UserForm";
import styled from "styled-components";

const StyledSignupPage = styled(StyledMain)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
`;

export default function Signup(props) {
  return (
     <StyledSignupPage>
      <UserForm isLogin={false} />
      </StyledSignupPage>
  );
}
