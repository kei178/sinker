import Link from 'next/link';
import EditPostItem from '../../../components/EditPostItem';

const EditPost = ({ id }) => (
  <div>
    <h1>POST</h1>
    <EditPostItem id={id} />
    <hr />
    <Link href={`/posts/${id}`}>
      <a>Go back</a>
    </Link>
  </div>
);

EditPost.getInitialProps = (ctx) => {
  const { id } = ctx.query;
  return { id };
};

export default EditPost;
