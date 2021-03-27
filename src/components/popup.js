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

  width: 500px;
  height: 500px;
  background: #f7f7f7;

  svg {
    width: 20px;
    height: 20px;
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
