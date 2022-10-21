import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function Logo() {
  return (
    <Nav to={"/"}>
      <GiKnifeFork />
      <Icon>
        <Title>yummy</Title>
      </Icon>
    </Nav>
  );
}

const Title = styled.h3`
  font-size: 1.5rem;
  padding-left: 1rem;
`;
const Icon = styled.div`

  font-size: 1.5rem;
font-weight:400;
font-family "Lobster Two", cursive`;

const Nav = styled(Link)`
  text-decoration: none;
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
export default Logo;
