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
      color: var(--blue);
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
    color: var(--blue);
    &:hover,
    &:focus,
    &:active {
      color: var(--blue);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--blue) !important;
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
      background-color: var(--blue);
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

  smallButton: css`
    font-size: var(--fz-xs);
    padding: 0.75rem 1rem;
  `,

  medButton: css`
    font-size: var(--fz-sm);
    padding: 0.75rem 1rem;
  `,

  primaryButton: css`
    color: var(--background);
    background-color: var(--blue);
    box-shadow: 0px 3px 17px rgba(81, 159, 231, 30%);
    &:hover,
    &:focus,
    &:active {
      color: var(--background);
      background-color: var(--blue);
      transform: scale(0.95);
    }
  `,

  transparentButton: css`
    background-color: var(--background);
    color: var(--blue);
    // font-weight: 700;
    &:hover,
    &:focus,
    &:active {
      background-color: var(--background);
      color: var(--blue);
      transform: scale(0.95);
    }
  `,

  yellowButton: css`
    background-color: var(--yellow);
    color: var(--main-text);
    box-shadow: 0px 3px 17px rgba(294, 197, 68, 50%);
    // font-weight: 600;
    &:hover,
    &:focus,
    &:active {
      background-color: var(--yellow);
      color: var(--main-text);
      transform: scale(0.95);
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

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export default mixins;
