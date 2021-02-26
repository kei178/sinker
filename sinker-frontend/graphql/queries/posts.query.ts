import { gql } from '@apollo/client';
import { Post } from '../../types';

export const POSTS_QUERY = gql`
  query {
    posts {
      id
      title
    }
  }
`;

export interface PostsData {
  posts: Post[];
}
