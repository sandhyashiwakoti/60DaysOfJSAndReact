import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function HomePage() {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

  const renderPosts = () => {
    if (isLoading) return <p>Loading posts...</p>;
    if (error)
      return <p className="error-text">Error fetching posts: {error}</p>;

    return (
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <Link to={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>Latest Posts</h2>
      {renderPosts()}
    </div>
  );
}

export default HomePage;
