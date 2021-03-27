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
    // background: red;
    height: 30px;

    }

   
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
          <input type="text" name="name" required />
          <label htmlFor="name">Name</label>
        </StyledFieldset>
        <StyledFieldset>
          <input type="email" name="email" required />
          <label htmlFor="email">Email</label>
        </StyledFieldset>

        <StyledFieldset>
          <input type="text" name="subject" required />
          <label htmlFor="subject">Subject</label>
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
