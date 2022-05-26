import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Header from "../../components/Header";
import { FaChevronLeft } from "react-icons/fa";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Header />
      <div className="card card-page">
        <Link href="/">
          <a className="btn btn-back">
            <FaChevronLeft className="react-icons" />
          </a>
        </Link>
        <img
          src={cover_image}
          className="cover_image"
          alt="The cover image for this article."
        />
        <h1 className="post-title">{title}</h1>

        <p className="post-date">Posted on {date}</p>
        <div className="container post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts")); //get files

  //create their corresponding paths
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false, // 404 when attempting to access slugs that don't exist
  };
}

export async function getStaticProps({ params: { slug } }) {
  const mdWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(mdWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
