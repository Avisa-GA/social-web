import { StyledFooter } from "../styles";

export default function Footer(props) {
  return (
    <StyledFooter>
          <p style={{color: "#bf360c"}}>&copy; All Rights Reserved {new Date().getFullYear()}</p>
    </StyledFooter>
  );
}