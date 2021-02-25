import { gql } from '@apollo/client';

const POST_QUERY = gql`
  query($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;

export default POST_QUERY;
