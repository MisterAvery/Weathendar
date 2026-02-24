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
      <Logo onClick={() => logOut(setUser)} href="/dashboard">Weathendar</Logo>
      <NavLinks>
        <ButtonLink href="/dashboard">Dashboard</ButtonLink>
        <ButtonLink href="/weather">Weather</ButtonLink> 
        <span Style="color: white;">|</span>
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
  box-shadow: -2.5px 2.5px 0 2.5px #b5b5b5;
`;

const NavLinks = styled.div`
  background: #8a37b0;
  border-radius: 3px;
  padding: 0.7em 0.5em;
  box-shadow: -2.5px 2.5px 0 2.5px #692d91;
`;

const ButtonLink = styled(Link)`
  margin: 0 1.2em;
  text-decoration: none;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
