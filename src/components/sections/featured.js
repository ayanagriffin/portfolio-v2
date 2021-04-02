import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { IconGitHub } from '@components/icons';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
display: grid;
grid-template-columns:repeat(2, 1fr);
gap: 30px;

svg{
  margin-top: -2px;
}
h3{
  font-size: var(--fz-heading);
  font-weight: 800;
}

@media (max-width: 1080px) {
  grid-template-columns:repeat(1,1fr);
}

&:nth-child(even){
  .project-content{
    order: 1;

    @media (max-width: 1080px) {
      order: 2;
    }
  }

  .project-image{
    order: 2;
    padding-left: 100px;
    @media (max-width: 1080px) {
      order: 1;
      padding-left: 0;
      
    }
  }
}

&:nth-child(odd){
  .project-image{
    padding-right: 100px;
    @media (max-width: 1080px) {
      padding: 0!important;
      
    }
  }
  
}
&:not(:last-child){
  margin-bottom: 125px;
}

.project-content{
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: var(--fz-lg);
  .button-primary{
    ${({ theme }) => theme.mixins.yellowButton};
    margin-bottom: 8px;
  }

  .project-description{
    margin: 5px 0;
    color: var(--p-text);
  }

  .built-with{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
   

    p{
      font-weight: bold;
      margin-right: 8px;
    
    }

  }
  
 
}

.project-image {
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    width: 100%;
}


`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 700, traceSVG: { color: "#ffffff" }) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjects = data.featured.edges.filter(({ node }) => node);

  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <h2 ref={revealTitle}>Some Things I’ve Built</h2>

      <StyledProjectsGrid>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, cover } = frontmatter;

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <div className="project-content">
                  <h3 className="project-title">
                    <a href={external}>{title}</a>
                  </h3>

                  <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
                  <div className="built-with">
                    <p>
                      Built with
                      {tech.length > 0 &&
                        tech.map((item, i) => (
                          <span key={i}>
                            {' '}
                            {i === tech.length - 1 && <span className="separator">and </span>}
                            {item}
                            {i !== tech.length - 1 && <span className="separator">,</span>}
                            {i === tech.length - 1 && <span>&nbsp;</span>}
                          </span>
                        ))}
                      {github && (
                        <a
                          href={github}
                          aria-label="GitHub Link"
                          className="icon project-icon-link">
                          <IconGitHub />
                        </a>
                      )}
                    </p>
                  </div>
                  <div className="project-link">
                    <a
                      href={external ? external : github}
                      aria-label="Project Link"
                      className="button-primary button-link">
                      View {title}
                    </a>
                  </div>
                </div>

                <div className="project-image">
                  <a href={external ? external : github ? github : '#'}>
                    <Img fluid={cover.childImageSharp.fluid} alt={title} className="img" />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
