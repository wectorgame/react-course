import Post from './Post'

export const Posts = ({
  posts,
  handleDeletePost,
}: {
  posts: { id: string; title: string; body: string }[]
  handleDeletePost: (id: string) => void
}) => (
  <div>
    {posts.map((post) => (
      <Post key={post.id} handleDeletePost={handleDeletePost} {...post} />
    ))}
  </div>
)

export default Posts
