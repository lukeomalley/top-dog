import React, { useState } from 'react';
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

const DogList = ({ dogs }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterDogs = dogs => {
    return dogs.filter(dog => dog.name.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  return (
    <DogListWrapper>
      <input
        type="text"
        placeholder="Search for Dogs"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="dog-list">
        {filterDogs(dogs).map(dog => {
          return <DogCard key={dog.id} dog={dog}></DogCard>;
        })}
      </div>
    </DogListWrapper>
  );
};

export default DogList;
