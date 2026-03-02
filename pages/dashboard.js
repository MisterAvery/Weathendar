import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import { useStateContext } from '@/context/StateContext'
import { useRouter } from 'next/router'
import FlexDiv from '@/components/FlexDiv'
import DateBar from '@/components/Dashboard/DateBar'

// Reroutes user to the / directory if they are not logged in

/* For something with the datebase
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
*/

const Dashboard = () => {

  const { user } = useStateContext()  
  const router = useRouter() // Allows the redirect to happen 
  const [data, setData] = useState(() => callQuoteAPI());

  const [oachImgSrc , setOachImgSrc] = useState(`Oach${Math.floor(Math.random() * 4 + 1)}.PNG`); 

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ startTime, setStartTime ] = useState('');
  const [ endTime, setEndTime ] = useState('');

  useEffect(() => {
    if(!user){
      router.push('/')
    } 
  }, [user])

  async function callQuoteAPI() {
    const url = 'https://quotes-api12.p.rapidapi.com/quotes/random?type=success';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '87f8ad382dmsh603e919676f8267p1a243bjsn1101df62fbf5',
        'x-rapidapi-host': 'quotes-api12.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  
  // Function to handle when the user clicks the plus button
  // Needs to create a popup to get the event information, remove the popoup,
  // then add the event to the database, and then render the event on the calender
  function openModal() {
    document.getElementById("dialog").showModal();
  }

  function closeModal() {
    alert(title + ", " + description + ", " +  startTime + ", " +  endTime);
    document.getElementById("dialog").close();
  }

  return (
    <>
      <Navbar></Navbar>
      <section>
        <Dialog id="dialog">
          <h2>Lets add an event</h2>
          <InputWrapper>
            <InputTitle>Event Title</InputTitle>
            <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Description</InputTitle>
            <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Start Time</InputTitle>
            <Input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)}/>
          </InputWrapper>
          <InputWrapper>
            <InputTitle>End Time</InputTitle>
            <Input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)}/>
          </InputWrapper>
          <MainButton onClick={closeModal}>Add Event</MainButton>
        </Dialog>
        <Left>
          <DateBar></DateBar>
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
              <ItemRow>Nothing to do...</ItemRow>
              <ItemRow>Nothing to do...</ItemRow>
              <ItemRow>Nothing to do...</ItemRow>
              <ItemRow>Nothing to do...</ItemRow>
              <ItemRow>Nothing to do...</ItemRow>
              <ItemRow>Nothing to do...</ItemRow>
              <ItemRow>Nothing to do...</ItemRow>
            </ItemRowWrapper>

            <Plus onClick={openModal}>+</Plus>
          </div>
        </Left>
        <Right>
          <QuoteBox>“{data["quote"]}”<br/><br/>- {data["author"]}</QuoteBox>
          <img src={oachImgSrc} alt="An amazing photo of Oach"/>
        </Right>
      </section>
    </>
  )
}


//STYLED COMPONENTS
const Dialog = styled.dialog`
  position: absolute;
  left: 50%;
  top: 50vh;
  transform: translate(-50%, -50%);
  z-index: 10;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;

`;

const InputWrapper = styled.div`
  margin: 0.75rem 0;
  display: block;
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
  color: black;
`;

const MainButton = styled.button`
  background-color: #8a37b0;
  padding: 0.25rem 0.5rem;
  color: white;
  margin-top: 1rem;
  padding: 0.5em 1em;
  border-radius: 4px;
  border: 1px solid black;

  &:hover {
    background-color: #692d91;
  }
`;

const Header = styled.h2`
  font-size: 1.25rem;
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
  font-size: 1.3rem;
  font-style: italic;
  text-align: right;
  line-height: 1.6em;
  width: 85%;
  margin-bottom: 1em;
  overflow-y: scroll;
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

const Plus = styled.button`
  background: #8a37b0;
  color: white;
  font-size: 1.6em;
  padding: 0.25em 0.45em;
  border-radius: 4px;
  position: absolute;
  right: 19%;
  bottom: 1.5vh;
  z-index: 5;

  &:hover {
    background-color: #692d91;
  }
`;

export default Dashboard