import css from 'styled-jsx/css'

export default css`
    .story {
        margin-top: 1em;
        padding: 2em 1em;
        border-bottom: 1px solid #eee;
    }

    .story-title {
        display: inline-block;
        font-size: 1.5rem;
        margin-bottom: 0.5em;
    }
    .story-title:hover > a {
        color: var(--primary-color);
    }

    .story-info {
        display: flex;
    }

    .story span {
        display: flex;
    }

    .story span + span {
        margin-left: 1.2em;
    }

    .story :global(svg) {
        margin-right: 2px;
    }
`