import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Hero, Featured, Projects, Contact, Popup, ContactForm } from '@components';

const IndexPage = ({ location }) => {
  const [formIsOpen, setFormIsOpen] = useState(false);

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
            <ContactForm />
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
