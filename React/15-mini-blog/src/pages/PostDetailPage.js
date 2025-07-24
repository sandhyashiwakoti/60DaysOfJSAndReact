import { useParams, Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";

function PostDetailPage() {
  const { postId } = useParams();
  const {
    data: post,
    isLoading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  const renderPost = () => {
    if (isLoading) return <p>Loading post...</p>;
    if (error)
      return <p className="error-text">Error fetching post: {error}</p>;
    if (!post) return <p>Post not found.</p>;

    return (
      <article className="post-detail">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    );
  };

  return (
    <div>
      {renderPost()}
      <Link to="/" className="back-link">
        ← Back to All Posts
      </Link>
    </div>
  );
}

export default PostDetailPage;
