import React from 'react';
import styled from 'styled-components';
import Container from '../styles/Container';

const HeaderBox = styled.header`
  border-top: 6px solid rgb(56, 178, 172);
`;

const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <h1>Last Man Standing</h1>
        <p> Coming soon !!!!</p>
      </Container>
    </HeaderBox>
  );
};

export default Header;
