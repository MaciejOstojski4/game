import React from 'react';
import styled from 'styled-components';

import { Navbar } from './Navbar';
import { Router } from '../../../router';

export const Layout = () => {
  return (
    <Container>
      <Nav>
        <Navbar />
      </Nav>
      <Menu />
      <Content>
        <Router />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: repeat(2, auto);
  grid-template-areas: 'nav nav' 'menu content'
  max-width: 1400px;
  padding: 0 15px;
`;

const Nav = styled.section`
  grid-template-area: nav;
`;

const Menu = styled.section`
  grid-template-area: menu;
`;

const Content = styled.section`
  grid-template-area: content;
  padding: 30px;
`;
