import Head from 'next/head'
import Post from '../components/Post'
import Intro from '../components/Intro'
import Header from '../components/Header'
import matter from 'gray-matter'
import fs from 'fs' //can't import this client side unless using it in getStaticPaths
import path from 'path'
import { sortByDate } from '../utils/index'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Jared&apos;s Blog</title>
      </Head>


      {
        //want a sticky header, starting below hero img & text
      }
      <Header />

      <Intro text="Hello, world! I'm Jared." />


      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
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


  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}
