import { fetchNews } from '../lib/api'
import StoryList from '../components/StoryList'
import Layout from '../components/Layout'
import Error from 'next/error'
import Ragination from '../components/Pagination'
import Router from 'next/router'
import { useState } from 'react'

export default function Index({ data=[], page }) {
    const [isLoading, setIsLoading] = useState(false)

    Router.onRouteChangeStart = url => setIsLoading(true)
    Router.onRouteChangeComplete = () => setIsLoading(false)

    if (data.length === 0) {
        return <Error statusCode={500} />
    }

    return (
        <Layout>
            <StoryList data={data} isLoading={isLoading} />
            <Ragination page={page} />
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { query } = context
    const page = Number(query.page) || 1
    const data = await fetchNews(page).catch(err => [])
    
    return {
        props: { data, page }
    }
}