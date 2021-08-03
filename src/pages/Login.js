import UserForm from "../components/UserForm";
import { StyledMain } from "../styles";
import styled from "styled-components";

const StyledLoginPage = styled(StyledMain)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Login(props) {
  return (
    <StyledLoginPage>
      <UserForm isLogin={true} />
    </StyledLoginPage>
  );
}