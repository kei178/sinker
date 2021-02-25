import { gql } from '@apollo/client';

// @client (client directive) でキャッシュデータにアクセス
const LIST_HIDDEN_QUERY = gql`
  {
    listHidden @client
  }
`;

export default LIST_HIDDEN_QUERY;
