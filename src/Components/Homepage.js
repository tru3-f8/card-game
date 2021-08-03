import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Homepage() {
  return (
    <HomepageContainer>
      <HomepageLink to='/card'>
        <HomepageBackground src='/images/straight.jpg' />
      </HomepageLink>
      <HomepageTitle>Welcome!</HomepageTitle>
      <HomepageCaption>Click Anywhere To Play</HomepageCaption>
    </HomepageContainer>
  );
}

export default Homepage;

const HomepageContainer = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  justify-content: center;
`;

const HomepageBackground = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const HomepageLink = styled(Link)`
  height: 100%;
  width: 100%;
`;

const HomepageTitle = styled.h1`
  display: flex;
  position: absolute;
  color: white;
  font-size: 100px;
  padding-top: 150px;
`;

const HomepageCaption = styled.h3`
    color: white;
    position: absolute;
    padding-top: 350px;
`;
