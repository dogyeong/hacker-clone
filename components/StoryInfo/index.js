import style from './style'
import { RiUser3Line, RiTimeLine, RiChat3Line, RiThumbUpLine } from 'react-icons/ri'

export default function StoryInfo({ story }) {
  return (
    <React.Fragment>
      <div className="container">
        <h3 className="title">
          <a href={story.url}>{story.title}</a>
        </h3>
        <div className="info">
          <span>
            <RiUser3Line />
            {story.user}
          </span>
          <span>
            <RiTimeLine />
            {story.time_ago}
          </span>
          <span>
            <RiThumbUpLine />
            {story.points}
          </span>
          <span>
            <RiChat3Line />
            {story.comments_count}
          </span>
        </div>
      </div>
      <style jsx>{style}</style>
    </React.Fragment>
  )
}
