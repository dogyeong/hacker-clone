import { fetchNews } from '../lib/api'
import StoryList from '../components/StoryList'
import Layout from '../components/Layout'
import Error from 'next/error'
import ReactPaginate from 'react-paginate'
import Router from 'next/router'
import paginationStyle from '../components/Pagination/style'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

export default function Index({ data=[], page }) {
    const handlePageClick = (data) => {
        window.scrollTo(0,0)
        Router.push(`/?page=${data.selected + 1}`)
    }

    if (data.length === 0) {
        return <Error statusCode={500} />
    }

    return (
        <Layout>
            <StoryList data={data} />
            <ReactPaginate 
                onPageChange={handlePageClick}
                pageCount={10}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                forcePage={page-1}
                previousLabel={<RiArrowLeftSLine />}
                previousLinkClassName={"prev-link"}
                nextLinkClassName={"next-link"}
                nextLabel={<RiArrowRightSLine />}
                breakLabel={"···"}
                breakClassName={'break-me'}
                containerClassName={'pagination'}
                activeLinkClassName={'active'}
            />
            <style jsx>{paginationStyle}</style>
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