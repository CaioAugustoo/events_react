import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --primary: #ffffff;
    --primary-lightness: #1B2A2E;
    --first-orange: #15C3D6;
    --secondary-orange: #15B6D6;
    --gray: #8FA7B2;
    --white: #EBF2F5;
    --bg-secondary: #F5F8FA;
    --links: #1D8EFF;
    --bg-third: #1C1C24;
    --border: #D3E2E5;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    background-color: var(--white);
    color: var(--primary);
  }

  ul,
  ol,
  li {
    list-style: none;
  }
  
  .d-flex {
    display: flex;
    flex-wrap: wrap;
  }

  ::selection {
    color: var(--primary);
    background: var(--secondary-orange);
  }

  span {
    transition: all 0.3s ease;
  }

  button, input {
    font-family: 'Poppins', sans-serif;
    outline: none !important;
  }

  a {
    text-decoration: none;
    color: var(--primary);
    font-size: 1rem !important;
    padding: 0rem !important;
  }
`;

export const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0rem 0.3125rem;
`;