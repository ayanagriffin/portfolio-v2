import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { IconMoon, IconSun } from '@components/icons';
import { useScrollDirection } from '@hooks';



const SwitchColorThemeButton = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};

  
  position: fixed;
  bottom: 50px;
  left: 50px;
  background: transparent;
  width: 50px;
  height: 50px;
  padding: 10px !important;
  border-radius: 50px !important;
  background: var(--hover);
  z-index:100 ;
  @media (max-width: 1080px) {
    nav-left:40px;
  }
  @media (max-width: 768px) {
    left: 25px;
  }
  ${props =>
    props.scrollDirection === 'down' &&
    css`
      transform: translateX(-100px);
    `};
  &:hover,
  &:focus,
  &:active {
    outline: none !important;
    svg {
      transform: scale(0.95);
    }
  }

  svg {
    width: 100%;
    height: 100%;
    transition: var(--transition);
  }
`;

const ColorMode = ({switchColorMode}) => {
    const scrollDirection = useScrollDirection('down');
    const [colorMode, setColorMode] = useState(
        typeof window !== 'undefined' && localStorage.getItem('colormode'),
      );

    const handleThemeChange = () => {
        if (colorMode !== 'dark') {
          switchColorMode('dark');
          setColorMode('dark');
        } else {
          switchColorMode('light');
          setColorMode('light');
        }
      };

      return(
        <SwitchColorThemeButton
                scrollDirection={scrollDirection}
                onClick={handleThemeChange}
                title={colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="icon-button">
                {colorMode === 'dark' ? <IconSun /> : <IconMoon />}
        </SwitchColorThemeButton>
      )
      
}

ColorMode.propTypes = {
    switchColorMode: PropTypes.func.isRequired,
  };
export default ColorMode;
