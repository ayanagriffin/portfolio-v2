import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const StyledContactForm = styled.div`
  padding: 1rem 0;
  form {
    .button-link {
      ${({ theme }) => theme.mixins.primaryButton};
    }
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
  color: #9c9c9c;
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
    font-weight: 300;
    background: var(--background);
    height: 30px;

    &:focus ~ label,
    &:active ~ label,
    &:valid ~ label,
    &.filled ~ label{
      color: #0a466b;
      font-size: 12px;
      transform: translateY(-20px);
      background: transparent;
    }

    }

   
  }
  
`;

const ContactForm = () => {
  const [notSent, success, err] = ['notsent', 'success', 'err'];
  const [sendStatus, setSendStatus] = useState(notSent);
  const [emailFilled, setEmailFilled] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_3nbtaa9', 'template_42cdf7y', e.target, 'user_4IF04CZQmiVP6b3AubpTu')
      .then(
        () => {
          setSendStatus(success);
          setEmailFilled(false);
        },
        () => {
          setSendStatus(err);
          setEmailFilled(false);
        },
      );

    e.target.reset();
  }
  const checkEmailLength = event => {
    if (event.target.value.length > 0) {
      setEmailFilled(true);
    } else {
      setEmailFilled(false);
    }
  };

  return (
    <StyledContactForm>
      <h3>Send a message</h3>
      <form onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" required />

        <StyledFieldset>
          <input type="text" name="name" required />
          <label htmlFor="name">Name</label>
        </StyledFieldset>
        <StyledFieldset>
          <input
            type="email"
            name="email"
            onChange={checkEmailLength}
            className={emailFilled ? 'filled' : 'empty'}
            required
          />
          <label htmlFor="email">Email</label>
        </StyledFieldset>

        <StyledFieldset>
          <input type="text" name="subject" required />
          <label htmlFor="subject">Subject</label>
        </StyledFieldset>

        <StyledFieldset>
          <textarea name="message" rows={10} style={{ height: '100px' }} required />
          <label htmlFor="message">Message</label>
        </StyledFieldset>

        <input type="submit" value="Send" className="button-link" />
      </form>
      {sendStatus === 'success' ? (
        <p>Your message was sent successfully!</p>
      ) : sendStatus === 'err' ? (
        <p>Oops, there was an error sending your message</p>
      ) : null}
    </StyledContactForm>
  );
};

export default ContactForm;
