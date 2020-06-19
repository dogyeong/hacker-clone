import ReactPaginate from 'react-paginate'
import style from './style'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import Router from 'next/router'



export default function Pagination({ page }) {
    const handlePageClick = (data) => {
        window.scrollTo(0,0)
        Router.push(`/?page=${data.selected + 1}`)
    }

    return (
        <React.Fragment>
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
            <style jsx>{style}</style>
        </React.Fragment>
        
    )
}