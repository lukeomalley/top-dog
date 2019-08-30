import React from 'react';
import Head from 'next/head';
import withData from '../lib/apollo';

import DogContainer from '../components/DogContainer';

export default withData(() => {
  return (
    <div>
      <Head>
        <title>Dogs</title>
      </Head>
      <div className="title-wrapper">
        <h1 className="title">Welcome to Top Dog</h1>
        <p className="description">Is your dog the next top dog? 🐶</p>
      </div>
      <DogContainer />
    </div>
  );
});
