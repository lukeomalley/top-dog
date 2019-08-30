import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const DOG_QUERY = gql`
  query($id: ID!) {
    dog(id: $id) {
      id
      name
      breed
      isGoodDog
      user {
        name
      }
    }
  }
`;

const DogShow = ({ dogId }) => {
  const { data, loading, error, fetchMore } = useQuery(DOG_QUERY, {
    variables: { id: dogId },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error. {error.message}</div>;
  return (
    <div>
      <h1>{data.dog.name}</h1>
    </div>
  );
};

export default DogShow;
