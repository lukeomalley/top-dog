import gql from 'graphql-tag';

export default gql`
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
