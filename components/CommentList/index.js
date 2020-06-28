import Comment from '../Comment'
import style from './style'

export default function CommentList({ comments }) {
  if (comments.length === 0) {
    return <div>No Comment</div>
  }

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <style jsx>{style}</style>
    </div>
  )
}
