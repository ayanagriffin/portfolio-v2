import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { linkedin, email } from '@config';

const StyledContactForm = styled.div`
  padding: 1rem 0;
  form {
    .button-link {
      ${({ theme }) => theme.mixins.primaryButton};
    }
  }

  .fieldset-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 0;
    }
  }

  .button-link {
    margin-top: 20px;
  }

  p {
    font-size: var(--fz-lg);
    margin-top: 20px;
  }
`;

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 10px;
  padding-left: 0;
  position: relative;
  width: 100%;

  label{
    position: absolute;
  left: 0;
  font-size: 0.9rem;
  margin-top: 18px;
  z-index: 1000;
  transition: 0.5s;
  
  pointer-events: none;

  }
  input, textarea{
    width: 100%;
    padding: 5px 0;
    margin: 10px 0;
    font-size: 0.9rem;
    border: none;
    border-bottom: 2px solid #e3e3e3;
    resize: none;
    outline: none;
    font-family: var(--font-karla);
    font-weight: 400;
    background: var(--background);
    height: 30px;
    color: var(--main-text);
    &:focus ~ label,
    &:active ~ label,
    &:valid ~ label,
    &.filled ~ label{
      color: var(--blue);
      font-size: 12px;
      transform: translateY(-25px);
      background: transparent;
    }

    }

    textarea{
      height: 100px;
    }
    .message-label{
      transform: translateY(70px);
    }

   
  }
  
`;

const ContactForm = ({ formValues, setFormValues, emptyForm }) => {
  const [notSent, success, err] = ['notsent', 'success', 'err'];
  const [sendStatus, setSendStatus] = useState(notSent);
  const [emailFilled, setEmailFilled] = useState(false);

  useEffect(() => {
    if (formValues.email.length > 0) {
      setEmailFilled(true);
    }
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_3nbtaa9', 'template_42cdf7y', e.target, 'user_4IF04CZQmiVP6b3AubpTu')
      .then(
        () => {
          setSendStatus(success);
          setEmailFilled(false);
          setFormValues(emptyForm);
        },
        () => {
          setSendStatus(err);
          setEmailFilled(false);
        },
      );
  }

  const checkEmailLength = e => {
    if (e.target.value.length > 0) {
      setEmailFilled(true);
    } else {
      setEmailFilled(false);
    }
  };
  const updateFormValues = e => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
    if (name === 'email') {
      checkEmailLength(e);
    }
  };

  return (
    <StyledContactForm>
      <h3>Send a message</h3>
      <form onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" required />
        <div className="fieldset-row">
          <StyledFieldset>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={updateFormValues}
              required
            />
            <label htmlFor="name">Name</label>
          </StyledFieldset>
          <StyledFieldset>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={updateFormValues}
              className={emailFilled ? 'filled' : 'empty'}
              required
            />
            <label htmlFor="email">Email</label>
          </StyledFieldset>
        </div>

        <StyledFieldset>
          <input
            type="text"
            name="subject"
            value={formValues.subject}
            onChange={updateFormValues}
            required
          />
          <label htmlFor="subject">Subject</label>
        </StyledFieldset>

        <StyledFieldset>
          <textarea
            name="message"
            value={formValues.message}
            onChange={updateFormValues}
            required
          />
          <label className="message-label" htmlFor="message">
            Message
          </label>
        </StyledFieldset>

        <input type="submit" value="Send" className="button-link" />
      </form>
      {sendStatus === 'success' ? (
        <p>Thank you for your message, I'll be in touch soon!</p>
      ) : sendStatus === 'err' ? (
        <p>
          Oops, there was an error sending your message... Please try{' '}
          <a
            href={`mailto:${email}?subject=${formValues.subject}&body=${formValues.message}`}
            target="_blank"
            rel="noreferrer">
            emailing me
          </a>{' '}
          or messaging me on{' '}
          <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn!
          </a>
        </p>
      ) : null}
    </StyledContactForm>
  );
};

ContactForm.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  emptyForm: PropTypes.object.isRequired,
};

export default ContactForm;
