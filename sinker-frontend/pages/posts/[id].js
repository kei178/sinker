import Link from 'next/link';
import PostItem from '../../components/PostItem';

const Post = ({ id }) => (
  <div>
    <h1>POST</h1>
    <PostItem id={id} />
    <hr />
    <Link href="/">
      <a>Go back</a>
    </Link>
  </div>
);

Post.getInitialProps = (ctx) => {
  const { id } = ctx.query;
  return { id };
};

export default Post;
