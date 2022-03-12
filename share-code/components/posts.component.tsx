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
      {/* <div className="grid grid-cols-1 sm: grid-cols-2 lg: grid-cols-3 gap-3 md: gap-6 p-2 md: p-6 group cursor-pointer"> */}
      <div className="md: gap-6 p-2 md: p-6 cursor-pointer">
        {posts.map((post) => (
          <Link key={post._id} href={`post/${post.slug.current}`}>
            <div className="hover:scale-105 transition-transform duration-200 ease-in-out border rounded-lg overflow-hidden my-4">
              {
                post.mainImage && (
                  <img className="h-60 w-full object-cover" src={urlFor(post.mainImage).url()} alt="" />
                )
              }
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">{post.description} by {post.author.name}</p>
                </div>
                {
                  post.author.image && (
                    <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()} alt="" />
                  )
                }
              </div>
            </div>
          </Link>

        ))}
      </div>
    </>
  )
}
export default Posts;