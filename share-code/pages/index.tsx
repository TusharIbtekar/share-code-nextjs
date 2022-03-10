import type { NextPage } from 'next'
import Head from 'next/head'
import { sanityClient, urlFor } from '../sanity'

import Navbar from '../components/navbar.component'
import { Post } from '../typings';
import Posts from '../components/posts.component';

interface Props {
  posts: Post[];
}

export default function Home(props: Props) {
  const { posts } = props;
  console.log(posts);

  return (
    <div className="">
      <Head>
        <title>Share Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Posts posts={posts} />

    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `
  *[_type == "post"] {
    _id,
    title,
    author-> {
      name,
      image
  },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  };
}