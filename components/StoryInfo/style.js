import css from 'styled-jsx/css'

export default css`
  .container {
    padding: 1em;
    margin: 2em 0;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 0.5em;
  }

  .title a:hover {
    color: var(--primary-color);
  }

  .info span + span {
    margin-left: 1.2em;
  }

  .info :global(svg) {
    margin-right: 2px;
  }
`
