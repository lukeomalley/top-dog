import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const LayoutWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lato|Poppins');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    color: var();
    background: var(--mainWhite);
    line-height: 1.4;
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1.25rem;
    letter-spacing: var(--mainSpacing);
  }
`;

const Layout = props => {
  return (
    <LayoutWrapper>
      <Nav />
      {props.children}
    </LayoutWrapper>
  );
};

export default Layout;
