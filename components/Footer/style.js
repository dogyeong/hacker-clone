import css from 'styled-jsx/css'

export default css`
    footer {
        width: 100%;
        padding: 3em 0;
        display: flex;
        justify-content: center;
        font-size: 1.125rem;
    }

    span {
        display: inline-flex;
        align-items: center;
        padding: 0.3em 0.5em;
        border-radius: 0.3em;
    }

    span:hover {
        background-color: #eee;
    }

    span + span {
        margin-left: 1em;
    }
`