import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { navLinks } from '@config';
import { loaderDelay } from '@utils';
import { useScrollDirection } from '@hooks';
import { Menu } from '@components';
import { IconMoon, IconSun } from '@components/icons';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  ${props =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(0px);
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `};

  ${props =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `};

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;

  font-family: var(--font-poppins);
  z-index: 12;
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--fz-xs);

      a {
        margin: 10px;
        ${({ theme }) => theme.mixins.inlineLink};
        ${({ theme }) => theme.mixins.navLink};
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.primaryButton};
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
  }
`;

const SwitchColorThemeButton = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  position: relative;
  background: transparent;
  width: 50px;
  height: 50px;
  padding: 10px !important;
  border-radius: 50px !important;

  &:hover {
    background: var(--hover);
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Nav = ({ isHome, switchColorMode }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [colorMode, setColorMode] = useState(
    typeof window !== 'undefined' && localStorage.getItem('colormode'),
  );

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setAboutPage = b => {
    typeof window !== 'undefined' && sessionStorage.setItem('isAboutPage', JSON.stringify(b));
    document.activeElement.blur();
  };

  const handleThemeChange = () => {
    if (colorMode !== 'dark') {
      switchColorMode('dark');
      setColorMode('dark');
    } else {
      switchColorMode('light');
      setColorMode('light');
    }
  };

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <SwitchColorThemeButton
                onClick={handleThemeChange}
                title={colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
                {colorMode === 'dark' ? <IconSun class="sun" /> : <IconMoon />}
              </SwitchColorThemeButton>
            </CSSTransition>
          )}
        </TransitionGroup>

        <StyledLinks>
          <ol>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                    <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                      {name === 'About' ? (
                        <Link to={url} onClick={() => setAboutPage(true)}>
                          {name}
                        </Link>
                      ) : name === 'Home' ? (
                        <Link to={url} onClick={() => setAboutPage(false)}>
                          {name}
                        </Link>
                      ) : (
                        <Link to={url}>{name}</Link>
                      )}
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                  <a
                    className="resume-button button-link"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                    Resume
                  </a>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </StyledLinks>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <Menu />
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
  switchColorMode: PropTypes.func.isRequired,
};

export default Nav;
