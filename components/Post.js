import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className="card">

      {
        // <img src={post.frontmatter.cover_image} alt="" />
      }

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <p className="post-date"><em>Posted on {post.frontmatter.date}</em></p>

      <Link href={`/blog/${post.slug}`}>
        <a className="btn react-icons">Read More</a>
      </Link>
    </div>
  )
}
