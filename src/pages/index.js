import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Hero, Featured, Projects, Contact, Popup, ContactForm } from '@components';

const IndexPage = ({ location }) => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const initialContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const [formValues, setFormValues] = useState(initialContactForm);
  const closeForm = () => {
    setFormIsOpen(false);
    window.onscroll = function() {};
  };

  const openForm = () => {
    setFormIsOpen(true);
  };

  return (
    <Layout location={location}>
      <main className="fillHeight">
        <Hero />
        <Featured />
        <Projects />
        <Contact openForm={openForm} />
        {formIsOpen && (
          <Popup closeForm={closeForm}>
            <ContactForm
              setFormValues={setFormValues}
              formValues={formValues}
              emptyForm={initialContactForm}
            />
          </Popup>
        )}
      </main>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
