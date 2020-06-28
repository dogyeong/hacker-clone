import style, { global } from './style'

export default function Comment({ comment }) {
  const { content, user, time_ago, comments } = comment
  return (
    <article className="comment-container">
      <div className="comment-user">
        <span>{comment.user}</span>
        <span>{comment.time_ago}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>

      {comments && comments.map((childComment) => <Comment key={childComment.id} comment={childComment} />)}

      <style jsx>{style}</style>
      <style jsx global>
        {global}
      </style>
    </article>
  )
}
