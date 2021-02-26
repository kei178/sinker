import { useQuery } from '@apollo/client';
import POST_QUERY from '../graphql/queries/post.query';

const PostItem = ({ id }) => {
  const { loading, error, data } = useQuery(POST_QUERY, {
    variables: { id: parseInt(id) },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const { post } = data;
  if (!post) return null;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;
