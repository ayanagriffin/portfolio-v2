import React from 'react';
// import emailjs from 'emailjs-com';
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
  margin-bottom: 30px;
  position: relative;
  width: 100%;

  input,
  textarea {
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
    background: red;
    height: 30px;
  }

  label {
    position: absolute;
    top: 50%;
  }
`;

const ContactForm = () => {
  // const [notSent, pending, success, err] = ['notsent', 'pending', 'success', 'err']
  // const [sendStatus, setSendStatus] = useState(notSent)
  function sendEmail(e) {
    e.preventDefault();

    // emailjs.sendForm('service_3nbtaa9', 'template_42cdf7y', e.target, 'user_4IF04CZQmiVP6b3AubpTu')
    //   .then((result) => {
    //     setSendStatus(success)
    //   }, (error) => {
    //     setSendStatus(err)
    //   });

    e.target.reset();
  }

  return (
    <StyledContactForm>
      <h3>Send a message</h3>
      <form onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" required />

        <StyledFieldset>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required />
        </StyledFieldset>
        <StyledFieldset>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </StyledFieldset>

        <StyledFieldset>
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" required />
        </StyledFieldset>

        <StyledFieldset>
          <label htmlFor="message">Message</label>
          <textarea name="message" />
        </StyledFieldset>

        {/* <input type="submit" value="Send" className='button-link' /> */}
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;
