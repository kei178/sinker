import { gql } from '@apollo/client';

const UPDATE_POST = gql`
  mutation($params: PostInputType!) {
    updatePost(input: { params: $params }) {
      id
      title
      body
    }
  }
`;

export default UPDATE_POST;
