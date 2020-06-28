import Comment from '../Comment'

export default function CommentList({ comments }) {
  if (comments.length === 0) {
    return <div>No Comment</div>
  }

  return (
    <React.Fragment>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </React.Fragment>
  )
}
