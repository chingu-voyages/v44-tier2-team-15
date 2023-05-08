import { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: ${p => p.theme.space[0]}px;;
    padding-top: ${p => p.theme.space[0]}px;;
    padding-bottom: ${p => p.theme.space[0]}px;;
    font-family: ${p => p.theme.fonts.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size:  ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.lineHeights.content};
    color: ${p => p.theme.colors.darkBrown};
    background-color: ${p => p.theme.colors.sandy};
  }

  h1,h2,h3,h4,h5,h6,p {
  margin: ${p => p.theme.space[0]}px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
      padding: ${p => p.theme.space[0]}px;
      margin: ${p => p.theme.space[0]}px;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button{
    cursor: pointer;
  }
`;
