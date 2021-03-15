import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: var(--secondary-button);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    color: var(--secondary-button);
    &:hover,
    &:focus,
    &:active {
      color: var(--secondary-button);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--secondary-button) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 3px;
      background-color: var(--secondary-button);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  sourceCode: css`
    color: var(--main-text);
    font-size: var(--fz-md);
    text-transform: lowercase;
    margin-bottom: 5px;
    &:hover,
    &:focus,
    &:active {
      color: var(--main-text);
    }
    &:after {
      background-color: var(--main-text);
    }
  `,

  navLink: css`
    color: var(--main-text);
    font-size: var(--fz-sm);
    &:hover,
    &:focus,
    &:active {
      color: var(--main-text);
    }
    &:after {
      background-color: var(--main-text);
    }
  `,

  button: css`
    background-color: var(--primary-button);
    border-radius: var(--border-radius);
    padding: 8px 40px;
    font-weight: bold;
    letter-spacing: 0.75px;
    font-size: var(--fz-md);
    text-transform: capitalize;
    transition: var(--transition);
    white-space: nowrap;
    &:hover,
    &:focus,
    &:active {
      transform: scale(0.95);
    }
  `,

  smallButton: css`
    font-size: var(--fz-xs);
    padding: 0.75rem 1rem;
  `,

  medButton: css`
    font-size: var(--fz-sm);
    padding: 0.75rem 1rem;
  `,

  //TODO:change name to secondary button
  secondaryButton: css`
    color: var(--secondary-button);
    background-color: transparent;
    border: 2px solid var(--secondary-button);
    border-radius: var(--border-radius);
    padding: 1rem 2rem;
    font-size: var(--fz-md);
    font-weight: bold;
    text-transform: capitalize;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    letter-spacing: 0.75px;
    &:hover,
    &:focus,
    &:active {
      color: var(--background);
      background-color: var(--secondary-button);
      transform: scale(0.95);
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px rgba(149, 157, 165, 0.2);
    }
  `,

  // fancyList: css`
  //   padding: 0;
  //   margin: 0;
  //   list-style: none;
  //   font-size: var(--fz-lg);
  //   li {
  //     position: relative;
  //     padding-left: 30px;
  //     margin-bottom: 10px;
  //     &:before {
  //       content: '▹';
  //       position: absolute;
  //       left: 0;
  //       color: var(--green);
  //     }
  //   }
  // `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;
