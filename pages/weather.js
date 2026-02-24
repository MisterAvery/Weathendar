import Navbar from '@/components/Dashboard/Navbar';
import FlexDiv from '@/components/FlexDiv';
import React from 'react'
import styled from 'styled-components';
import { WiDaySunny } from 'weather-icons-react';

// /weather

const Weather = () => {
  return (
    <>
      <Navbar></Navbar>
      <GridDiv>
        <InfoWrapper Style="grid-area: Icon;">
          <WiDaySunny size={200} color="#ffa56f"></WiDaySunny>
        </InfoWrapper>
        <InfoWrapper Style="grid-area: Description;">
          <Header>Description</Header>
          <p>Becoming partly cloudy later with any flurries or snow showers ending by midnight. Low 18F. Winds WNW at 10 to 15 mph. Chance of snow 30%</p>
        </InfoWrapper>
        <InfoWrapper Style="grid-area: Facts;">
          <Header>City: State College</Header>
          <ul>
            <li><strong>Temperature:</strong> 19 F</li>
            <li><strong>Range: </strong>H: 32 F L: 18 F</li>
            <li><strong>Feels Like: </strong>8 F</li>
            <li><strong>Humidity: </strong>75%</li>
            <li><strong>Dew Pont: </strong>11 F</li>
          </ul>
          <br/>
          <ul>
            <li><strong>Sunrise: </strong>6:52 AM</li>
            <li><strong>Sunset: </strong>5:57 PM</li>
          </ul>
        </InfoWrapper>
      </GridDiv>
    </>
  )
}

const GridDiv = styled.div`
  width: 75%; 
  min-height: 80vh;
  margin: 4vh auto;
  display: grid;
  grid-template-areas: 
    "Icon        Facts"
    "Icon        Facts"
    "Description Facts"
    "Description Facts";
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto auto auto;
  row-gap: 3rem;
  column-gap: 2rem;;
`;
const Header = styled.h1`
  font-size: 26px;
  color: #8a37b0;
  margin-bottom: 0.7em;
`;

const InfoWrapper = styled(FlexDiv)`
  flex-direction: column;
  box-shadow: -3.5px 3.5px 0 3.5px #555;
  background: #f0f5f4;
  padding: 1.5rem;
  border: 1px solid black;
  border-radius: 4px;
  line-height: 1.5em;
  
  ul { width: 75%; }  
    
  li {
    list-style: none;
    padding: 0.8em 0.5em;

    &:not(:first-of-type) {
      border-top: 1px solid black;
    }
  }
`;

const Section = styled.div`
  width: 80%;
  min-height: 81vh;
  margin: 5vh auto;
  background: #f4f781;
  padding: 1.5rem;
  border-radius: 4px;
  border-top: none;
  border: 1px solid black;
`;



export default Weather;