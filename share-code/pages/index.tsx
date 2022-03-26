import type { NextPage } from 'next'
import Head from 'next/head'
import { sanityClient, urlFor } from '../sanity'

import Navbar from '../components/navbar.component'
import { Post } from '../typings';
import Posts from '../components/posts.component';
import CreatePost from '../components/createPost.component';

interface Props {
  posts: Post[];
}

export default function Home(props: Props) {
  const { posts } = props;
  // console.log(posts);

  return (
    <div className="">
      <Head>
        <title>Share Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className='flex flex-col max-w-3xl mx-auto p-5'>
        <CreatePost />
        <Posts posts={posts} />
      </div>

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

// * [_type == "post" && slug.current == $slug][0] {
//   _id,
//     _createdAt,
//     title,
//     author -> {
//       name,
//       image
//     },
//     'comments': * [
//       _type == "comment" &&
//       post._ref == ^._id &&
//       approved == true
//     ],
//   description,
//     mainImage,
//     slug{
//     current
//   },
//   body,
// }
