const Post = ({
  id,
  title,
  body,
  handleDeletePost,
}: {
  id: string
  title: string
  body: string
  handleDeletePost: (id: string) => void
}) => (
  <div>
    <h1>{title}</h1>
    <p>{body}</p>
    <button onClick={() => handleDeletePost(id)}>Delete</button>
  </div>
)

export default Post
