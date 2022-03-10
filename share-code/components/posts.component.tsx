import Link from "next/link";
import { urlFor } from "../sanity";
import { Post } from "../typings"


type Props = {
  posts: Post[]
}

function Posts({ posts }: Props) {
  return (
    <>
      {/* {console.log(posts)} */}
      <h1>hllo</h1>
      <div>
        <h2>hwdoydo</h2>
        {posts.map((post) => (
          <Link key={post._id} href={`post/${post.slug.current}`}>
            <div>
              {/* {
                post.mainImage && (
                  <img src={urlFor(post.mainImage).url()} alt="" />
                )
              } */}
            </div>
          </Link>

        ))}
      </div>
    </>
  )
}
export default Posts;