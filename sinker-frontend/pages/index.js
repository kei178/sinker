import { useQuery } from '@apollo/client';
import PostsList from '../components/PostsList';
import ToggleButton from '../components/ToggleButton';
import LIST_HIDDEN_QUERY from '../graphql/queries/list-hedden.query';

const Home = () => {
  const {
    data: { listHidden },
  } = useQuery(LIST_HIDDEN_QUERY);

  return (
    <div>
      <ToggleButton />
      <h1>POSTS</h1>
      {listHidden ? null : <PostsList />}
    </div>
  );
};

export default Home;
