import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import { useStateContext } from '@/context/StateContext'
import { useRouter } from 'next/router'

// Reroutes user to the / directory

const Dashboard = () => {

  // const { user } = useStateContext()  

  const router = useRouter()


  // useEffect(() => {
  //   if(!user){
  //     router.push('/')
  //   } else{

  //   }
  // }, user)

  return (
    <>
      <Navbar></Navbar>
      <Section>
        <Left>
          <DateBar>
            <h3>2/22</h3>
            <h3>2/23</h3>
            <h3>2/24</h3>
            <h3>2/25</h3>
            <h3>2/26</h3>
            <h3>2/27</h3>
            <h3>2/28</h3>
          </DateBar>
          <div>
            <TimeBar>
              <h3>1</h3>
              <h3>2</h3>
              <h3>3</h3>
              <h3>4</h3>
              <h3>5</h3>
              <h3>6</h3>
              <h3>7</h3>
              <h3>8</h3>
              <h3>9</h3>
              <h3>10</h3>
              <h3>11</h3>
              <h3>12</h3>
            </TimeBar>
            <div>
              <h1>one</h1>
            </div>
          </div>
        </Left>
        <Right>
          <QuoteBox>“For there is always light. If only we’re brave enough to see it. If only we’re brave enough to be it.”<br/><br/>- Author</QuoteBox>
        </Right>
      </Section>
    </>
  )
}


//STYLED COMPONENTS
const Section = styled.section`
  display: flex;
  width: 100%;
  height: 91vh;
  overflow-y: auto;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  background: repeating-linear-gradient(-53deg, #e1edf4 0 2%, #f0f5f4 2% 4%);
  width: 82%;
`;

const Right = styled(Div)`
  background: #f6e285;
  width: 18%;
  border-left: 1px solid black;
`;

const QuoteBox = styled(Div)`
  font-size: 1.4rem;
  font-style: italic;
  text-align: right;
  line-height: 1.6em;
  width: 85%;
`;

const DateBar = styled.div`
  position: absolute;
  left: 0;
  top: 9vh;
  height: 91vh;
  background: black;
  width: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

const TimeBar = styled(Div)`
  background: red;
  justify-content: space-evenly;
  position: absolute;
  left: 5%;
  width: 77%;
  height: 4vh;
  border-bottom: 1px solid black;
`;

export default Dashboard