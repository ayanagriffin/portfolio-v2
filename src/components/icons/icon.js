import React from 'react';
import PropTypes from 'prop-types';
import {
  IconExternal,
  IconGitHub,
  IconLinkedin,
  IconLogo,
  IconClose,
  IconMail,
  IconResume,
  IconSun,
  IconMoon,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'External':
      return <IconExternal />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Logo':
      return <IconLogo />;
    case 'Close':
      return <IconClose />;
    case 'Mail':
      return <IconMail />;
    case 'Resume':
      return <IconResume />;
    case 'Sun':
      return <IconSun />;
    case 'Moon':
      return <IconMoon />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
