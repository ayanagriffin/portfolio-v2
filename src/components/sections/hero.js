import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
// import Img from 'gatsby-image';
import { navDelay, loaderDelay } from '@utils';

const HeroContainer = styled.div`
  position: relative;
  min-height: 100vh;

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
`;
const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 0;
  height: 100%;

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
  }
  .about {
    margin: 0;
    margin-top: 10px;
  }

  .about-text p {
    max-width: 800px;
  }
  .email-link {
    ${({ theme }) => theme.mixins.secondaryButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHomePage, setisHomePage] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hey there! I'm</h1>;
  const two = <h2 className="big-heading">Ayana Griffin</h2>;
  const three = <h3 className="medium-heading">I create user-friendly applications</h3>;
  const four = (
    <p>
      I'm a freshman at Stanford studying Computer Science and Human-Computer Interaction. I strive
      to build meaningful, beautiful, projects.
    </p>
  );
  const five = (
    <button className="email-link" onClick={() => setisHomePage(!isHomePage)}>
      About Me
    </button>
  );

  const items = [one, two, three, four, five];

  return (
    <HeroContainer>
      <StyledHeroSection className={isHomePage ? 'active' : 'inactive'}>
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </StyledHeroSection>

      <StyledHeroSection className={isHomePage ? 'inactive-about' : 'active'}>
        <h1>Hi there!</h1>
        <h2 className="big-heading">Nice to meet you!</h2>

        <div className="about-text">
          <p>Hey! I'm Ayana, a CS student at Stanford University in the Bay Area.</p>
          <p className="about">
            I love creating websites, applications, or anything that lives on the internet! I am
            especially passionate about using technology to advance global education and social
            justice.
          </p>
          <p className="about">
            I've previously interned at <a href="/">Company 1</a> and <a href="/">Company 1</a>,
            working with JavaScript, React, Node and Gatsby.
          </p>
        </div>
        <button
          className="email-link"
          onClick={() => setisHomePage(!isHomePage)}
          tabIndex={isHomePage ? -1 : undefined}>
          Back Home
        </button>
      </StyledHeroSection>
    </HeroContainer>
  );
};

export default Hero;
