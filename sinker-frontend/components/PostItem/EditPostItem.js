import { useMutation } from '@apollo/client';
import { useState } from 'react';
import UPDATE_POST from '../../graphql/mutations/update-post.mutation';

const EditPostItem = ({ setIsEditing, currentPost, setCurrentPost }) => {
  const [post, setPost] = useState(currentPost);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const [updatePost] = useMutation(UPDATE_POST);
  const handleSave = async () => {
    const { error, data } = await updatePost({
      variables: {
        params: {
          id: parseInt(post.id),
          title: post.title,
          body: post.body,
        },
      },
    });
    if (error) return;

    setCurrentPost(data.updatePost);
    setIsEditing(false);
  };

  return (
    <div>
      <button
        onClick={() => {
          setIsEditing(false);
        }}
      >
        Cancel
      </button>
      <button onClick={handleSave}>Save</button>
      <span className="form-field">
        <input name="title" value={post.title} onChange={handleChange} />
      </span>
      <span>
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
        `}
      </style>
    </div>
  );
};

export default EditPostItem;
