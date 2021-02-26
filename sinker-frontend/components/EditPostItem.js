import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import UPDATE_POST from '../graphql/mutations/update-post.mutation';
import POST_QUERY from '../graphql/queries/post.query';

const EditPostItem = ({ id }) => {
  const [post, setPost] = useState(null);
  const [message, setMessage] = useState('');

  const [updatePost] = useMutation(UPDATE_POST);
  const { loading, error, data } = useQuery(POST_QUERY, {
    variables: { id: parseInt(id) },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  if (!post) setPost(data.post);
  if (!post) return null;

  const handleChange = (e) => {
    setMessage('');
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSave = async () => {
    const { error } = await updatePost({
      variables: {
        params: {
          id: parseInt(post.id),
          title: post.title,
          body: post.body,
        },
      },
    });

    error ? alert(error) : setMessage('Successfully saved');
  };

  return (
    <div>
      <div>
        <button onClick={handleSave}>Save</button>
        {message ? <span className="message">{message}</span> : null}
      </div>
      <span className="form-field">
        <input name="title" value={post.title} onChange={handleChange} />
      </span>
      <span className="form-field">
        <textarea
          name="body"
          value={post.body}
          rows="10"
          onChange={handleChange}
        />
      </span>
      <style jsx>
        {`
          input,
          textarea {
            width: 100%;
          }
          span.form-field {
            display: block;
            overflow: hidden;
            padding: 0 5px 0 0;
            margin: 10px auto;
          }
          button {
            margin-right: 5px;
          }
          span.message {
            font-size: 0.8rem;
            color: #0018f9;
          }
        `}
      </style>
    </div>
  );
};

export default EditPostItem;
