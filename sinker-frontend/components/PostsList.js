import { useQuery } from '@apollo/client';
import POSTS_QUERY from '../graphql/posts.query';

const PostsList = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const { posts } = data;
  return (
    <ul>
      {!posts
        ? null
        : posts.map((post, index) => {
            return <li key={index}>{post.title}</li>;
          })}
    </ul>
  );
};

export default PostsList;
