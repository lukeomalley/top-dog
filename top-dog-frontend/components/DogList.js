import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

import DogCard from './DogCard';

const DogListWrapper = styled.div`
  .dog-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }

  input {
    display: grid;
    justify-self: center;
    width: 30%;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const ALL_DOGS_QUERY = gql`
  {
    dogs {
      id
      name
      breed
      imageUrl
      isGoodDog
    }
  }
`;

const DogList = () => {
  const { loading, error, data } = useQuery(ALL_DOGS_QUERY);
  if (data && data.dogs) {
    const { dogs } = data;
    return (
      <DogListWrapper>
        <input type="text" placeholder="Search for Dogs" />
        <div class="dog-list">
          {dogs.map(dog => {
            return <DogCard key={dog.id} dog={dog}></DogCard>;
          })}
        </div>
      </DogListWrapper>
    );
  }
  return <div>Loading...</div>;
};

export default DogList;
