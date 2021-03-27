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
  width: 500px;
  min-height: 500px;
  padding: 3rem;
  background: var(--background);

  svg {
    width: 20px;
    height: 20px;
  }

  button {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    padding: 5px;
  }
`;

const Popup = ({ closeForm, children }) => {
  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, closeForm);

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
  };
  return (
    <PopupContainer>
      <PopupWrapper ref={wrapperRef}>
        <button className="icon" onClick={closeForm}>
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
