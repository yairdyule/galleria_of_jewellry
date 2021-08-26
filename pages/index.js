import Head from 'next/head'
import matter from 'gray-matter'
import fs from 'fs' //can't import this client side unless using it in gSP
import path from 'path'

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Jared's Blog</title>
      </Head>
      <h2>Hello :)</h2>
    </div>
  )
}

//fetch data at build time
export async function getStaticProps() {

  //gets files from posts directory
  const files = fs.readdirSync(path.join('posts'))

  //get slug & frontmatter from '/posts'
  const posts = files.map((filename) => {

    //create slug
    const slug = filename.replace('.md', '')

    //get frontmatter
    const mdWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    //parse frontmatter
    const { data: frontmatter } = matter(mdWithMeta)


    return {
      slug,
      frontmatter
    }
  })

  console.log(posts);

  return {
    props: {
      posts: 'The Posts'
    }
  }
}
