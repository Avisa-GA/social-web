import { signInWithGoogle } from "../services/firebase";
import { useHistory } from "react-router-dom";
import { StyledButton } from "../styles";

export default function GoogleButton(props) {
  const history = useHistory();

  async function handleClick() {
    await signInWithGoogle();
    history.push("/");
  }

  return (
    <StyledButton onClick={handleClick}>
      Login With <span>G</span>
      <span>O</span>
      <span>O</span>
      <span>G</span>
      <span>L</span>
      <span>E</span>
    </StyledButton>
  );
}
