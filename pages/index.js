import { fetchNews } from '../lib/api'
import StoryList from '../components/StoryList'
import Layout from '../components/Layout'
import Error from 'next/error'
import Pagination from '../components/Pagination'
import { useEffect, useState } from 'react'
import { Router } from 'next/router'

export default function Index({ data = [], page }) {
  const [isLoading, setIsLoading] = useState(false)

  const onRouteChangeStart = (url) => {
    if (!url.includes('item')) {
      setIsLoading(true)
    }
  }

  const onRouteChangeComplete = () => setIsLoading(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', onRouteChangeStart)
    Router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      Router.events.off('routeChangeStart', onRouteChangeStart)
      Router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  if (data.length === 0) {
    return <Error statusCode={500} />
  }

  return (
    <Layout>
      <StoryList data={data} isLoading={isLoading} />
      <Pagination page={page} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { query } = context
  const page = Number(query.page) || 1
  const data = await fetchNews(page).catch((err) => [])

  return {
    props: { data, page },
  }
}
