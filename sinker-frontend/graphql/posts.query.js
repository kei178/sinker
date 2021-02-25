import { gql } from '@apollo/client';

const POSTS_QUERY = gql`
  query {
    posts {
      id
      title
    }
  }
`;

export default POSTS_QUERY;
