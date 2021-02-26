import { gql } from '@apollo/client';
import LIST_HIDDEN_QUERY from './queries/list-hedden.query';

// resolvers で利用する型を定義する
// Mutation に限らず、既存の型を extend できる
export const typeDefs = gql`
  extend type Mutation {
    ToggleListHidden: Boolean!
  }
`;

// readQuery -> writeQuery -> return updated values という流れ
export const resolvers = {
  Mutation: {
    toggleListHidden: (_root, _args, { cache }, _info) => {
      const { listHidden } = cache.readQuery({
        query: LIST_HIDDEN_QUERY,
      });

      cache.writeQuery({
        query: LIST_HIDDEN_QUERY,
        data: { listHidden: !listHidden },
      });

      return !listHidden;
    },
  },
};
