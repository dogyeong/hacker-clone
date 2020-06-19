import style from './style'
import { RiUser3Line, RiTimeLine, RiChat3Line, RiThumbUpLine } from 'react-icons/ri';

export default function StoryList({ data }) {
    return (
        <React.Fragment>
            {
                data.map(story => (
                    <article key={story.id} className="story">
                        <h3 className="story-title">
                            <a href={story.url}>{story.title}</a>
                        </h3>
                        <div className="story-info">
                            <span><RiUser3Line />{story.user}</span>
                            <span><RiTimeLine color={"blue"} />{story.time_ago}</span>
                            <span><RiThumbUpLine />{story.points}</span>
                            <span><RiChat3Line />{story.comments_count}</span>
                        </div>
                    </article>
                ))
            }

            <style jsx>{style}</style>
        </React.Fragment>
    )
}