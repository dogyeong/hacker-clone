import { fetchItem } from '../lib/api'
import Error from 'next/error'
import Layout from '../components/Layout'
import CommentList from '../components/CommentList'
import { RiUser3Line, RiTimeLine, RiChat3Line, RiThumbUpLine } from 'react-icons/ri'

export default function Item({ data = {} }) {
  if (!data || Object.keys(data).length === 0) {
    return <Error statusCode={500}></Error>
  }

  return (
    <Layout title={data.title} backButton={true}>
      <div className="story">
        <h3 className="story-title">
          <a href={data.url}>{data.title}</a>
        </h3>
        <div className="story-info">
          <span>
            <RiUser3Line />
            {data.user}
          </span>
          <span>
            <RiTimeLine />
            {data.time_ago}
          </span>
          <span>
            <RiThumbUpLine />
            {data.points}
          </span>
          <span>
            <RiChat3Line />
            {data.comments_count}
          </span>
        </div>
      </div>

      <CommentList comments={data.comments} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { query } = context
  const id = Number(query.id)
  const data = await fetchItem(id).catch((err) => {})

  return {
    props: { data },
  }
}
