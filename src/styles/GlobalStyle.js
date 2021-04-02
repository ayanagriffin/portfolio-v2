import { createGlobalStyle } from 'styled-components';
import TransitionStyles from './TransitionStyles';
import PrismStyles from './PrismStyles';

const GlobalStyle = createGlobalStyle`


  :root {
    --navy-shadow: rgba(149, 157, 165, 0.2);
    --white: #ffffff;
    --dark-blue: #3A3A5B;
    --yellow: #F3C444;

    --blue: #0075E3;
    --background: var(--white);
    --large-text: #3F3D56;
    --accent-text: #015E60;
    --p-text: #6E6D8C;
    --main-text: #3A3A5B;
    --transparent-button-color: #0075E3; 
    --hamburger: #000000;
    --hover: #f7f7f7


    --font-karla: 'Karla', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-poppins: 'Poppins', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 8px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }


  :focus {
    outline: 2px dashed var(--blue);
    outline-offset: 3px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
    color: var(--main-text);
    font-family: var(--font-poppins);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 125px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1200px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
      padding-top: 0px;

      @media (max-height: 675px){
        padding-top: 60px;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 700;
    color: var(--main-text);
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: bold;
  }

  .medium-heading {
    margin: 20px 0 10px 0;
    font-size: clamp(30px, 6vw, 60px);
  }

  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {

    width: 18px;
    color: var(--blue);

    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;

    &.inline-link, .inline-link {
      ${({ theme }) => theme.mixins.inlineLink};

      }

  }

 
  button:not(.icon), .button-link {
    font-family: var(--font-poppins);
    cursor: pointer;
    border: 0;
    border-radius: var(--border-radius);
    padding: 1rem 2rem;
    font-size: var(--fz-md);
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    letter-spacing: 0.75px;
    -webkit-appearance: none;
    -moz-appearance: none;
    &:after {
      display: none !important;
    }
  }

  .icon{
    background: transparent;
    outline: none;
    border:none;
    cursor: pointer;
    transition: var(--transition);
    &:hover{
      transform: scale(0.9);
    }
    &:focus,
    &:active {
      outline: 2px dashed var(--blue);
      outline-offset: 3px;
    }
  }

  input:not(.button-link), textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;
    font-family: var(--font-karla);
    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a:not(.icon) {
      ${({ theme }) => theme.mixins.inlineLink};
    }

  }

  blockquote {
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: var(--lightest-navy);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: var(--font-poppins);
    font-size: var(--fz-md);
  }

  #logo {

  }

  .overline {

    font-family: var(--font-poppins);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {

    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-poppins);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;


    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      font-family: var(--font-poppins);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .small-top-text{
    position: relative;
    margin-bottom: 40px;
    color: var(--accent-text);
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--fz-xs);
    
    &:after{
      content: '';
      position: absolute;
      margin-left: 10px;
      top: 50%
      transform: translateY(-50%);
      width: 40px;
      height: 3px;
      background-color: var(--accent-text);
    }
  }

  ${TransitionStyles};

  ${PrismStyles};
`;

export default GlobalStyle;
