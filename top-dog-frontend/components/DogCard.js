import React from 'react';
import styled from 'styled-components';

const DogCardWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  img {
    object-fit: fill;
    width: 100%;
  }

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .details {
    padding: 20px;
  }
`;

const DogCard = ({ dog }) => {
  return (
    <DogCardWrapper>
      <img src={dog.imageUrl} />
      <div className="details">
        <h2>{dog.name}</h2>
        <p>Breed: {dog.breed}</p>
        <p>{dog.isGoodDog ? 'Good Dog' : 'Bad Dog'}</p>
      </div>
    </DogCardWrapper>
  );
};

export default DogCard;
