import css from 'styled-jsx/css'

export default css`
    header {
        width: 100%;
        background-color: var(--primary-color);
    }

    .inner {
        width: 100%;
        margin: auto;
        padding: 1.25em 1em;
        color: white;
    }
    @media all and (min-width:1024px) {
        .inner { 
            width: 80%;
            max-width: 1280px; 
        }
    }
    @media all and (min-width:600px) and (max-width:1023px) {
        .inner { max-width: 90%; }
    }
    @media all and (max-width:599px) {
        .inner { max-width:100%; }
    }

    .logo a{
        font-size: 1.25rem;
        font-weight: bold;
        color: white;
    }
`