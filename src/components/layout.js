import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, Nav, Footer } from '@components';
import { GlobalStyle, theme } from '@styles';
import '@fontsource/karla';
import '@fontsource/poppins';

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const SkipToContentLink = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:focus,
  &:active {
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    padding: 18px 23px;
    outline: 0;
    border-radius: var(--border-radius);
    background-color: var(--blue);
    color: var(--background);
    font-size: var(--fz-md);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    overflow: auto;
    transition: var(--transition);
    z-index: 99;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  // const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  // const handleExternalLinks = () => {
  //   const allLinks = Array.from(document.querySelectorAll('a'));
  //   if (allLinks.length > 0) {
  //     allLinks.forEach(link => {
  //       if (link.host !== window.location.host) {
  //         link.setAttribute('rel', 'noopener noreferrer');
  //         link.setAttribute('target', '_blank');
  //       }
  //     });
  //   }
  // };

  return (
    <>
      <Head />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <SkipToContentLink className="button-link" href="#content">
            Skip to Content
          </SkipToContentLink>

          {/* {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : ( */}
          <StyledContent>
            <Nav isHome={isHome} />
            {/* <Social isHome={isHome} />
              <Email isHome={isHome} /> */}

            <div id="content">
              {children}
              <Footer />
            </div>
          </StyledContent>
          {/* )} */}
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
