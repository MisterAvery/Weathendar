import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import { useStateContext } from '@/context/StateContext'
import { useRouter } from 'next/router'
import FlexDiv from '@/components/FlexDiv'

// Reroutes user to the / directory

const Dashboard = () => {

  // const { user } = useStateContext()  

  const router = useRouter()
  // const image

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
            <h4>2/22</h4>
            <h4>2/23</h4>
            <h4>2/24</h4>
            <h4>2/25</h4> 
            <h4>2/26</h4>
            <h4>2/27</h4>
            <h4>2/28</h4>
          </DateBar>
          <div>
            <TimeBar>
              <h4>1 PM</h4>
              <h4>2 PM</h4>
              <h4>3 PM</h4>
              <h4>4 PM</h4>
              <h4>5 PM</h4>
              <h4>6 PM</h4>
              <h4>7 PM</h4>
              <h4>8 PM</h4>
              <h4>9 PM</h4>
              <h4>10 PM</h4>
              <h4>11 PM</h4>
              <h4>12 PM</h4>
            </TimeBar>
            <ItemRowWrapper>
              <ItemRow>Loading...</ItemRow>
              <ItemRow>Loading...</ItemRow>
              <ItemRow>Loading...</ItemRow>
              <ItemRow>Loading...</ItemRow>
              <ItemRow>Loading...</ItemRow>
              <ItemRow>Loading...</ItemRow>
              <ItemRow>Loading...</ItemRow>
            </ItemRowWrapper>
          </div>
        </Left>
        <Right>
          <QuoteBox>“For there is always light. If only we’re brave enough to see it. If only we’re brave enough to be it.”<br/><br/>- Author</QuoteBox>
          <img src={`Oach${Math.floor(Math.random() * 4 + 1)}.PNG`} alt="An amazing photo of Oach"/>
        </Right>
      </Section>
    </>
  )
}


//STYLED COMPONENTS
const Section = styled.section`
  // height: 91vh;
  // overflow-y: auto;
`;

const Left = styled.div`
  background: repeating-linear-gradient(-53deg, #e1edf4 0 2%, #f0f5f4 2% 4%);
  width: 82%;
`;

const Right = styled(FlexDiv)`
  position: absolute;
  top: 9vh;
  left: 82%;
  background: #e3e3e3;
  width: 18%;
  height: 91vh;
  border-left: 1px solid black;
  flex-direction: column;

  img {
    margin-top: 2rem;
    max-width: 80%;
    max-height: 30vh;
    height: auto;
  }
`;

const QuoteBox = styled(FlexDiv)`
  font-size: 1.4rem;
  font-style: italic;
  text-align: right;
  line-height: 1.6em;
  width: 85%;
  margin-bottom: 1em;
`;

const DateBar = styled.div`
  position: absolute;
  left: 0;
  top: 9vh;
  height: 91vh;
  background: rgb(34, 34, 34);
  padding-top: 7vh;
  padding-bottom: 5vh;
  width: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const TimeBar = styled(FlexDiv)`
  background: #ffa56f;
  justify-content: space-evenly;
  position: absolute;
  left: 5%;
  width: 77%;
  height: 4vh;
  border-bottom: 1px solid black;
`;

const ItemRowWrapper = styled(FlexDiv)`
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 5%;
  top: 13vh;
  width: 77%;
  height: 87vh;
  padding-bottom: 1rem;
`;

const ItemRow = styled(FlexDiv)`
  justify-content: left;
  width: 100%;
  height: 10.5vh;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  background: #b5b5b558;
`;

export default Dashboard