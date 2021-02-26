import { useQuery } from '@apollo/client';
import { useState } from 'react';
import POST_QUERY from '../../graphql/queries/post.query';
import EditPostItem from './EditPostItem';

const PostItem = ({ id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const { loading, error, data } = useQuery(POST_QUERY, {
    variables: { id: parseInt(id) },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  if (!currentPost) setCurrentPost(data.post);
  if (!currentPost) return null;

  return (
    <>
      {isEditing ? (
        <EditPostItem
          setIsEditing={setIsEditing}
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
        />
      ) : (
        <div>
          <button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
          <h2>{currentPost.title}</h2>
          <p>{currentPost.body}</p>
        </div>
      )}
    </>
  );
};

export default PostItem;
