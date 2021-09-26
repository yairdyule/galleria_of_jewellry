import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="card inline-flex">
      <div className="col">
        <img
          className="inline-image"
          src={post.frontmatter.cover_image}
          alt=""
        />
      </div>

      <div className="col">
        <h3>{post.frontmatter.title}</h3>

        <p className="post-date">
          <em>Posted on {post.frontmatter.date}</em>
        </p>

        {
          //<p>{post.frontmatter.excerpt}</p>
        }

        <Link href={`/blog/${post.slug}`}>
          <a className="btn react-icons">Read More</a>
        </Link>
      </div>
    </div>
  );
}
