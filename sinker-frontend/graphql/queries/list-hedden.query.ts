import { gql } from '@apollo/client';

// @client (client directive) でキャッシュデータにアクセス
export const LIST_HIDDEN_QUERY = gql`
  {
    listHidden @client
  }
`;

export interface ListHiddenData {
  listHidden: boolean;
}
