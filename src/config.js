module.exports = {
  email: 'hi@ayanagriffin.com',
  linkedin: 'https://www.linkedin.com/in/ayanagriffin',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ayanagriffin',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ayanagriffin',
    },
    {
      name: 'Mail',
      url: 'mailto:hi@ayanagriffin.com',
    },
    {
      name: 'Resume',
      url: 'resume.pdf',
    },
  ],

  navLinks: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    // TODO: Change these colors
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
    blue: '#0075E3',
    yellow: '#F3C444',
    white: '#FFFFFF',
  },

  lightModeColors: {
    '--background': '#ffffff',
    '--blue': '#0075E3',
    '--large-text': '#3F3D56',
    '--accent-text': '#015E60',
    '--p-text': '#6E6D8C',
    '--main-text': '#3A3A5B',
    '--transparent-button-color': '#0075E3',
    '--hamburger': '#000000',
    '--hover': '#f7f7f7',
  },

  darkModeColors: {
    '--background': '#10172A',
    '--blue': '#0084ff',
    '--large-text': '#ffffff',
    '--accent-text': '#ffffff',
    '--p-text': '#dedede',
    '--main-text': '#ffffff',
    '--transparent-button-color': '#ffffff',
    '--hamburger': '#ffffff',
    '--hover': '#22315c',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
