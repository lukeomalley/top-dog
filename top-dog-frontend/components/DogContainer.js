import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import DogList from './DogList';
import ALL_DOGS_QUERY from '../queries/ALL_DOGS_QUERY';

const DogContainer = () => {
  const { data, loading, error, fetchMore } = useQuery(ALL_DOGS_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error. {error.message}</div>;
  return <DogList dogs={data.dogs} fetchMore={fetchMore}></DogList>;
};

export default DogContainer;
