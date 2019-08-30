import React from 'react';
import styled from 'styled-components';

import Meta from './Meta';
import Nav from './Nav';

const PageWrapper = styled.div`
  width: 100%;
  color: #333;
  width: 80vw;
  margin: 0 auto;

  h1 {
    margin: 0;
    width: 100%;
    line-height: 1.15;
    font-size: 48px;
  }

  h1,
  p {
    text-align: center;
  }

  .title-wrapper {
    margin-bottom: 20px;
  }
`;

const Page = ({ children }) => {
  return (
    <div>
      <Meta />
      <Nav />
      <PageWrapper>{children}</PageWrapper>
    </div>
  );
};

export default Page;
