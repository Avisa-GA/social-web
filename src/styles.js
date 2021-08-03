import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  height: 5rem;
  color: #ffffff;
  align-items: center;
  justify-content: space-between;
  background-color: #bf360c;
  box-shadow: 1px 2px 7px 1px #808080;
  padding: 0 1rem 0 1rem;
  h5 {
    font-family: var(--brand-font);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  nav {
    display: flex;
    ul {
      display: flex;
      list-style: none;
      align-items: center;
      li {
        margin-right: 1rem;
        
      }
    }
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex: 1;
`;

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  color: #000000;
`;

export const StyledTitle = styled.p`
    font-family: var(--title-font);
`;



export const StyledForm = styled.form`
  legend {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    max-width: 100rem;
    margin: auto;
    label {
      display: flex;
      font-size: 0.7rem;
      justify-content: space-between;
      align-items: center;
    }
    input {
      border-radius: 5px;
      height: 2.5rem;
      font-size: 1.25rem;
      font-weight: 700;
      margin: 1rem 0 1rem 1rem;
    }
    input[type="file"] {
      display: flex;
      align-items: center;
      font-size: 1rem;
      max-width: 15rem;
    }
    input[type="submit"] {
      background-color: dodgerblue;
      color: #ffffff;
      margin-left: 0;
      &:hover {
        background-color: #000000;
      }
      &:disabled {
        background-color: #808080;
      }
    }
  }
`;

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledButton = styled.button`
  margin-top: 0.1rem 0 0 0;
  background-color: white;
  color: #000000;
  border-radius: 5px;
  height: 2.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
  &:disabled {
    background-color: #808080;
  }
  span {
    text-shadow: 1px 1px 1px #808080;
  }
  & span:nth-child(1) {
    color: blue;
  }
  & span:nth-child(2) {
    color: red;
  }
  & span:nth-child(3) {
    color: gold;
  }
  & span:nth-child(4) {
    color: blue;
  }
  & span:nth-child(5) {
    color: green;
  }
  & span:nth-child(6) {
    color: red;
  }
`;
