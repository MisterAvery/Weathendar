import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import {login, isEmailInUse} from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'

// auth/login

const Login = () => {

  const { user, setUser } = useStateContext()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const router = useRouter()


  async function handleLogin(){

  }


  return (
    <>
    <Navbar/>
    <Section>
      <div>
        <Title>Welcome Back!</Title>
        <br></br>
        <h3>Let's get productive</h3>
      </div>
      <div>
        <Header>Login</Header>
        <InputWrapper>
          <InputTitle>Email</InputTitle>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Password</InputTitle>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </InputWrapper>

        <UserAgreementText>By signing in, you automatically agree to our <UserAgreementSpan href='/legal/terms-of-use' rel="noopener noreferrer" target="_blank"> Terms of Use</UserAgreementSpan> and <UserAgreementSpan href='/legal/privacy-policy' rel="noopener noreferrer" target="_blank">Privacy Policy.</UserAgreementSpan></UserAgreementText>

        <MainButton onClick={handleLogin}>Submit</MainButton>
      </div>
    </Section>
    </>
  )
}

const Section = styled.section`
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #3333;
  padding: 1.5rem;
`;

const InputWrapper = styled.div`
  margin: 0.75rem 0;
  display: block;
`;

const Title = styled.h1`
  font-style: italic;
  letter-spacing: 1px;
  font-size: 2.8rem;
  color: white;
  z-index: 0;

  position: relative;
  
  &::after {
    content: '';
    width: 130%;
    height: 130%;
    background: #692d91;
    position: absolute;
    top: -15%;
    left: -15%;
    z-index: -1;
    transform: skew(25deg);
  }
`;

const Header = styled.h1`
  font-size: 26px;
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 0.25em 0.6em;
  margin-top: 0.1em;
  border-radius: 4px;
`;

const InputTitle = styled.label` /* Changed  to label for semantics */
  display: block;
  font-size: 14px;
  color: #666;
`;

const MainButton = styled.button`
  background-color: #6948a3;
  padding: 0.25rem 0.5rem;
  color: white;
  margin-top: 1rem;
  padding: 0.5em 1em;
  border-radius: 4px;

  &:hover {
    background-color: #692d91;
  }
`;

const UserAgreementText = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 20px;
  text-align: center;
`;

const UserAgreementSpan = styled(Link)`
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-of-type)::after {
    content: ', '; /* Adds comma between links */
  }
`;


export default Login