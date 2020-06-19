import css from 'styled-jsx/css'

export const global = css.global`
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        color: #333;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
    }
    @media all and (max-width:599px) {
        font-size: 15px;
    }

    :root {
        --responsive-large: 1024px;
        --responsive-medium: 600px;
        --primary-color: #4567E5;
    }
`

export default css`
    .container {
        width: 100%;
    }
    .container main {
        margin: auto;
    }

    @media all and (min-width:1024px) {
        .main { 
            width: 80%;
            max-width: 1280px; 
        }
    }
    @media all and (min-width:600px) and (max-width:1023px) {
        .main { max-width: 90%; }
    }
    @media all and (max-width:599px) {
        .main { max-width:100%; }
    }
`

