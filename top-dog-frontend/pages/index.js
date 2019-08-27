import React from 'react';
import Head from 'next/head';
import withData from '../lib/apollo';
import styled from 'styled-components';

import Layout from '../components/Layout';
import DogList from '../components/DogList';

const HomePageWrapper = styled.div`
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

export default withData(() => {
  return (
    <Layout>
      <Head>
        <title>Dogs</title>
      </Head>
      <HomePageWrapper>
        <div className="title-wrapper">
          <h1 className="title">Welcome to Top Dog</h1>
          <p className="description">Is your dog the next top dog? 🐶</p>
        </div>
        <DogList />
      </HomePageWrapper>
    </Layout>
  );
});
