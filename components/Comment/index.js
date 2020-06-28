export default function Comment({ comment }) {
  const { content, user, time_ago, comments } = comment
  return (
    <React.Fragment>
      <div>
        {comment.user} {comment.time_ago}
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      
      {comments && comments.map((childComment) => <Comment key={childComment.id} comment={childComment} />)}
    </React.Fragment>
  )
}
