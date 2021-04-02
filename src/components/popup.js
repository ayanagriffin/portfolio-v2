import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useOnClickOutside } from '@hooks';
import styled from 'styled-components';
import { IconClose } from '@components/icons';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  backdrop-filter: blur(10px);
  z-index: 3;
`;

const PopupWrapper = styled.div`
  ${({ theme }) => theme.mixins.absoluteCenter};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: var(--border-radius);
  width: clamp(400px, 75vw, 800px);
  padding: 3rem;
  @media (max-width: 768px) {
    width: 90vw;
    padding: 2rem;
  }

  background: var(--background);

  button {
    position: absolute;
    top: 1.5rem;
    right: 1rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Popup = ({ closeForm, children }) => {
  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, closeForm);

  return (
    <PopupContainer>
      <PopupWrapper ref={wrapperRef}>
        <button className="icon-button icon" onClick={closeForm}>
          <IconClose />
        </button>
        {children}
      </PopupWrapper>
    </PopupContainer>
  );
};

Popup.propTypes = {
  children: PropTypes.element,
  closeForm: PropTypes.func,
};

export default Popup;
