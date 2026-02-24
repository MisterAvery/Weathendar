import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home'

const Navbar = () => {
  const { setUser } = useStateContext()

  return (
    <Nav>
      <Logo onClick={() => logOut(setUser)} href="/auth/login">Weathendar</Logo>
      <Home></Home>
      <NavLinks>
        <ButtonLink href="/weather">Weather</ButtonLink> <span Style="color: white;">|</span>
        <ButtonLink href="/auth/signup">Sign Up</ButtonLink>
        <ButtonLink href="/auth/login">Login</ButtonLink>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 9vh;
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #25abba;
  border-bottom: 1px solid black;
`;

const Logo = styled(Link)`
  font-size: 1.2rem;
  font-weight: 900;
  padding: 0.5em 1em;
  background: white;
  border-radius: 4px;
  color: #8a37b0;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const NavLinks = styled.div`
  background: #8a37b0;
  border-radius: 3px;
  padding: 0.5em;
`;

const ButtonLink = styled(Link)`
  margin: 1.5em;
  text-decoration: none;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
