import { gql } from '@apollo/client';
import { Post } from '../../types';

export const POST_QUERY = gql`
  query($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;

export interface PostData {
  post: Post;
}
