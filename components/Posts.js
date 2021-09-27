import Post from "./Post";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      <h2>Musings</h2>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      <p>
        <em>
          Disclaimer: The stated opinions are those regarding whatever has most
          recently caught my eye.
        </em>
      </p>
    </div>
  );
}
