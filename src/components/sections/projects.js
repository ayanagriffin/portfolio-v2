import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-poppins);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    a {
      position: relative;
      z-index: 1;
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.primaryButton};
    margin: 80px auto 0;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  .built-with {
    margin: 5px 0 20px 0;
    font-size: var(--fz-md);
    font-weight: bold;
  }
  &:hover,
  &:focus-within {
    .project-inner {
      transform: translateY(-7px);
    }
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2.5rem 2rem;
    padding-bottom: 2rem;
    border-radius: var(--border-radius);

    transition: var(--transition);
  }

  .project-bottom {
    color: var(--blue);
    font-size: var(--fz-md);
    .inline-link {
      color: var(--blue);
      font-size: var(--fz-md);
    }
    svg {
      width: 22px;
      height: 22px;
      margin-right: 5px;
      margin-top: -2px;
    }

    a {
      margin-right: 12px;
    }
  }

  .project-title {
    margin: 0 0 10px;

    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: var(--p-text);
    font-size: var(--fz-md);

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              company
              external
            }
            html
          }
        }
      }
    }
  `);

  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.projects.edges.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  return (
    <StyledProjectsSection>
      <h2 ref={revealTitle}>Other Noteworthy Projects</h2>

      <Link className="inline-link archive-link" to="/archive" ref={revealArchiveLink}>
        view the archive
      </Link>

      <ul className="projects-grid">
        <TransitionGroup component={null}>
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { github, external, title, tech } = frontmatter;

              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledProject
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    <div className="project-inner">
                      <header className="project-top">
                        <h3 className="project-title">
                          <a href={external ? external : github}>{title}</a>
                        </h3>

                        <div
                          className="project-description"
                          dangerouslySetInnerHTML={{ __html: html }}
                        />
                        <p className="built-with">
                          Built with
                          {tech.length > 0 &&
                            tech.map((item, i) => (
                              <span key={i}>
                                {' '}
                                {i === tech.length - 1 && tech.length > 1 && (
                                  <span className="separator">and </span>
                                )}
                                {item}
                                {i !== tech.length - 1 && <span className="separator">,</span>}
                              </span>
                            ))}
                        </p>
                      </header>
                      <footer className="project-bottom">
                        <div className="project-links">
                          {github && (
                            <a href={github} aria-label="GitHub Link" className="project-icon-link">
                              <Icon name="GitHub" />
                              <span className="inline-link">Github</span>
                            </a>
                          )}
                          {external && (
                            <a
                              href={external}
                              aria-label="External Link"
                              className="project-icon-link">
                              <Icon name="External" />
                              <span className="inline-link">Live</span>
                            </a>
                          )}
                        </div>
                      </footer>
                    </div>
                  </StyledProject>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </StyledProjectsSection>
  );
};

export default Projects;
