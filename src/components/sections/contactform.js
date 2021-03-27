import React from 'react';
// import emailjs from 'emailjs-com';
import styled from 'styled-components';

const StyledContactForm = styled.div``;
const StyledForm = styled.form`
  .button-link {
    ${({ theme }) => theme.mixins.primaryButton};
  }
`;

const ContactForm = () => {
  // const [notSent, pending, success, err] = ['notsent', 'pending', 'success', 'err']
  // const [sendStatus, setSendStatus] = useState(notSent)
  function sendEmail(e) {
    e.preventDefault();

    // emailjs.sendForm('service_3nbtaa9', 'template_42cdf7y', e.target, 'user_4IF04CZQmiVP6b3AubpTu')
    //   .then((result) => {

    //     // setSendStatus(success)
    //   }, (error) => {

    //     // setSendStatus(err)
    //   });

    e.target.reset();
  }

  return (
    <StyledContactForm>
      <StyledForm onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" required />
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Subject
          <input type="text" name="subject" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" />
        </label>

        <input type="submit" value="Send" className="button-link" />
      </StyledForm>
    </StyledContactForm>
  );
};

export default ContactForm;
