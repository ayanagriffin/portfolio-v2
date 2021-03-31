import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { srConfig, linkedin, email } from '@config';
import sr from '@utils/sr';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;

    font-family: var(--font-poppins);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .contact-link {
    ${({ theme }) => theme.mixins.primaryButton};
    margin-top: 50px;
  }
`;

const Contact = ({ openForm }) => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I love to chat about new opportunities as well as my past and current work! Feel free to
        message me on <a href={linkedin}>LinkedIn</a>, send me an{' '}
        <a href={`mailto:${email}`}>email</a>, or simply fill out the contact form below!
      </p>

      <button className="contact-link" onClick={openForm}>
        Say Hi
      </button>
    </StyledContactSection>
  );
};

Contact.propTypes = {
  openForm: PropTypes.func.isRequired,
};

export default Contact;
