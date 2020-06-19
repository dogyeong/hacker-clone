import css from 'styled-jsx/css'

export default css`
    :global(.pagination) {
        display: flex;
        font-size: 1.25rem;
        margin: 2em 0;
        justify-content: center;
    }

    :global(.pagination li) {
        list-style: none;
    }

    :global(.pagination li + li) {
        margin-left: 0.5em;
    }

    :global(.pagination a){
        width: 2em;
        height: 2em;
        border-radius: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        outline: none;
    }

    :global(.pagination .active) {
        background-color: var(--primary-color);
        color: white;
    }

    :global(.pagination .prev-link, .pagination .next-link) {
        background-color: #eee;
    }
`