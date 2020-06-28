import { fetchItem } from '../lib/api'
import Error from 'next/error'
import Layout from '../components/Layout'
import StoryInfo from '../components/StoryInfo'
import CommentList from '../components/CommentList'
import { RiUser3Line, RiTimeLine, RiChat3Line, RiThumbUpLine } from 'react-icons/ri'

export default function Item({ data = {} }) {
  if (!data || Object.keys(data).length === 0) {
    return <Error statusCode={500}></Error>
  }

  return (
    <Layout title={data.title} backButton={true}>
      <StoryInfo story={data} />
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
