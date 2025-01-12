import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { navDelay, loaderDelay } from '@utils';

const HeroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  max-height: 200vh;
  padding-top: 0;
  .inactive {
    transition: 1s;
    transform: translateX(-100vw);
    opacity: 0;
  }

  .active-about {
    transition: 1s;
  }
  .inactive-about {
    transition: 1s;
    transform: translateX(100vw);
  }
  .active {
    transition: 1s;
  }

  @media (max-width: 900px) {
    margin-top: 50px;
  }

  @media (max-width: 330px) {
    margin-bottom: 200px;
  }

  h1 {
    margin: 0 0 20px 4px;

    font-family: var(--font-poppins);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;

    @media (max-width: 900px) {
      max-width: initial;
    }
  }
  .about {
    margin: 0;
    margin-top: 10px;
  }

  .about-text p {
    max-width: 900px;
  }
  .button-wrapper {
    margin-top: 50px;
  }
  button {
    ${({ theme }) => theme.mixins.primaryButton};
  }

  button,
  .button-link {
    @media (max-width: 480px) {
      ${({ theme }) => theme.mixins.medButton};
    }
  }

  @media (max-width: 480px) {
    padding: 60px 0;
    padding-top: 0px;

    @media (max-height: 675px) {
      padding-top: 60px;
    }
  }
`;
const StyledAboutSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 0;
  height: fit-content;
  min-height: 100vh;
`;

const StyledHomeSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;

  .medium-heading {
    span {
      color: var(--blue);
      white-space: nowrap;

      @media (max-width: 330px) {
        white-space: initial;
      }
    }
  }

  .text-content {
    max-width: 600px;
  }

  a {
    ${({ theme }) => theme.mixins.primaryButton};
  }
  button {
    margin-right: 5px;
    margin-bottom: 15px;
    @media (min-width: 290px) {
      margin-right: 15px;
      margin-bottom: 0;
    }
  }

  .secondary {
    ${({ theme }) => theme.mixins.transparentButton};
  }

  .img-content {
    position: relative;
    ${({ theme }) => theme.mixins.flexCenter};
    width: clamp(300px, 25vw, 600px);
    height: clamp(300px, 25vw, 600px);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .button-wrapper {
      margin-top: 20px;
    }

    .text-content {
      margin-bottom: 30px;
    }

    .img-content {
      width: clamp(200px, 35vw, 350px);
      height: clamp(200px, 35vw, 350px);
    }

    button {
      margin-top: 25px;
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/about/" } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);

  const [isMounted, setIsMounted] = useState(false);
  const [isBackHome, setIsBackHome] = useState(false);
  const buttonRef = useRef(null);
  const [isHomePage, setisHomePage] = useState(
    !JSON.parse(typeof window !== 'undefined' && sessionStorage.getItem('isAboutPage')),
  );

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setisHomePage(
      !JSON.parse(typeof window !== 'undefined' && sessionStorage.getItem('isAboutPage')),
    );
  }, [typeof window !== 'undefined' && sessionStorage.getItem('isAboutPage')]);

  const setPage = () => {
    setIsBackHome(isHomePage);
    setisHomePage(!isHomePage);

    if (isBackHome) {
      buttonRef.current.focus();
    }
  };

  const smallHeader = <h1>Hey there! I'm</h1>;
  const bigHeader = (
    <h2 className="medium-heading">
      Ayana Griffin, a <span>future software engineer</span>
    </h2>
  );
  const subtext = (
    <p>
      I'm a junior studying Symbolic Systems (CS + psychology
      + education). I strive to build meaningful, beautiful, projects.
    </p>
  );
  const buttons = (
    <div className="button-wrapper">
      <button ref={buttonRef} onClick={() => setPage()}>
        About Me
      </button>
      <a href="#contact" className="secondary button-link" tabIndex={!isHomePage ? -1 : undefined}>
        Get in Touch
      </a>
    </div>
  );

  const img = <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />;
  const items = [smallHeader, bigHeader, subtext, buttons];
  const imgItems = [img];

  return (
    <HeroContainer>
      <StyledHomeSection className={isHomePage ? 'active' : 'inactive'}>
        <div className="text-content">
          <TransitionGroup component={null}>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
        <div className="img-content">
          <TransitionGroup component={null}>
            {isMounted &&
              imgItems.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                  {item}
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
      </StyledHomeSection>

      <StyledAboutSection className={isHomePage ? 'inactive-about' : 'active'} id="about">
        <h2 className="medium-heading">Nice to meet you!</h2>

        <div className="about-text">
          <div
            className="about"
            dangerouslySetInnerHTML={{ __html: data.about.edges[0].node.html }}
          />
          <div className="button-wrapper">
            <button onClick={() => setPage()} tabIndex={isHomePage ? -1 : undefined}>
              Back Home
            </button>
          </div>
        </div>
      </StyledAboutSection>
    </HeroContainer>
  );
};

export default Hero;
