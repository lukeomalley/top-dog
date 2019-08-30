import React from 'react';
import withData from '../lib/apollo';

import DogShow from '../components/DogShow';

const Dog = props => {
  return <DogShow dogId={props.query.id}></DogShow>;
};

export default withData(Dog);
