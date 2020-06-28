import css from 'styled-jsx/css'

export const global = css.global`
  .comment-container a {
    color: var(--primary-color);
  }

  .comment-container a:hover {
    text-decoration: underline;
  }
`

export default css`
  .comment-container {
    padding-left: 1em;
    margin-top: 1em;
    border-left: 1px solid #eee;
  }

  .comment-user {
    margin-bottom: 0.5em;
  }

  .comment-user > span {
    color: grey;
    margin-right: 0.5em;
  }

  .comment-user > span:first-child {
    font-weight: bold;
  }
`
