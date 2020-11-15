import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    overflow-x: hidden;
    background-color: #312e38;
    color: #fff;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
