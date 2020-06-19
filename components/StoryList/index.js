import style from './style'
import { RiUser3Line, RiTimeLine, RiChat3Line, RiThumbUpLine } from 'react-icons/ri';
import Skeleton from 'react-loading-skeleton';

export default function StoryList({ data, isLoading }) {
    return (
        <React.Fragment>
            {
                isLoading ? (
                    data.map(story => (
                        <article key={story.id} className="story">
                            <div style={{ fontSize: '1.5rem', marginBottom: '0.5em' }}>
                                {<Skeleton />}
                            </div>
                            <Skeleton count={1} />
                        </article>
                    ))
                ) : (
                    data.map(story => (
                        <article key={story.id} className="story">
                            <h3 className="story-title">
                                <a href={story.url}>{story.title}</a>
                            </h3>
                            <div className="story-info">
                                <span><RiUser3Line />{story.user}</span>
                                <span><RiTimeLine />{story.time_ago}</span>
                                <span><RiThumbUpLine />{story.points}</span>
                                <span><RiChat3Line />{story.comments_count}</span>
                            </div>
                        </article>
                    ))
                ) 
            }
            <style jsx>{style}</style>
        </React.Fragment>
    )
}