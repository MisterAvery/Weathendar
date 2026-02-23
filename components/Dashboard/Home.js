import React from 'react';
import Link  from 'next/link';
import { IoMdHome } from 'react-icons/io'; // Importing a home icon from react-icons
import styled from 'styled-components';

const Home = () => {
  return (
    <Square href="/dashboard">
      <IoMdHome />
    </Square>
  );
};

const Square = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px; // Adjust the size as needed
  height: 43px; // Adjust the size as needed
  background-color: #6948a3; // Adjust the background color as needed
  color: white;
  border-radius: 4px; // Adjust for square or rounded corners
  text-decoration: none;
  
  svg {
    width: 1.2rem; // Adjust icon size as needed
    height: 1.2rem; // Adjust icon size as needed
  }

  &:hover {
    background-color: #692d91; // Adjust hover effect as needed
  }
`;

export default Home;
