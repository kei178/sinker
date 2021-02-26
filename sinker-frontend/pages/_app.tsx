import '../styles/globals.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { resolvers, typeDefs } from '../graphql/resolvers';
import LIST_HIDDEN_QUERY from '../graphql/queries/list-hedden.query';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const cache = new InMemoryCache();
cache.writeQuery({
  query: LIST_HIDDEN_QUERY,
  data: {
    listHidden: true,
  },
});
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  cache,
  typeDefs,
  resolvers,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
