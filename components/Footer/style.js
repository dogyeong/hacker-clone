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
        justify-content: center;
        align-items: center;
    }

    span:hover a {
        color: var(--primary-color);
    }

    span + span {
        margin-left: 1.2em;
    }
`