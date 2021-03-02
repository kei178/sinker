import { gql, InMemoryCache, Resolvers } from '@apollo/client';
import { LIST_HIDDEN_QUERY, ListHiddenData } from './queries/list-hedden.query';

// resolvers で利用する型を定義する
// Mutation に限らず、既存の型を extend できる
export const typeDefs = gql`
  extend type Mutation {
    ToggleListHidden: Boolean!
  }
`;

// readQuery -> writeQuery -> return updated values という流れ
export const resolvers: Resolvers = {
  Mutation: {
    toggleListHidden: (_root, _args, ctx, _info) => {
      const cache: InMemoryCache = ctx.cache;
      const { listHidden } = cache.readQuery<ListHiddenData, null>({
        query: LIST_HIDDEN_QUERY,
      });

      cache.writeQuery<ListHiddenData, null>({
        query: LIST_HIDDEN_QUERY,
        data: { listHidden: !listHidden },
      });

      return !listHidden;
    },
  },
};
