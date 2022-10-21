import styled from "styled-components";

export const Form = styled.form`
  margin: 3rem 20rem;

  div {
    position: relative;
    width: 70%;
    margin: 0 auto;
  }

  input {
    margin: 1rem auto;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    border-radius: 0.5rem;
    padding: 1rem 3rem;
    width: 100%;
    height: 3rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
