import Post from './Post'

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  )
}
