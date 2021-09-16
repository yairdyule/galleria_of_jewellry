import Head from 'next/head'
import Intro from '../components/Intro'
import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
// import Posts from '../components/Posts'
import matter from 'gray-matter'
import fs from 'fs' //can't import this client side unless using it in getStaticPaths
import path from 'path'
import { sortByDate } from '../utils/index'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Jared Jewell</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
      </Head>

      {
        //want a sticky header, starting below hero img & text
      }
      <Header />

      <Intro greeting="Hello, world!" intro="I'm Jared." />
      <About />
      {
        // <Posts posts={posts} />
      }

      <h2 id="bye">Thanks for stopping by, &amp; take care!</h2>

      <Header></Header>

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
