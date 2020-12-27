import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Container';

const HeaderBox = styled.header`
  border-top: ${(props) => `6px solid ${props.theme.colors.primary}`};
`;

const Title = styled.h1`
  font-weight: 600;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <Title>Last Man Standing</Title>
      </Container>
    </HeaderBox>
  );
};

export default Header;
