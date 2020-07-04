import styled from 'styled-components';

import { shade } from 'polished';

interface IModalPropsStd {
  size: 'sm' | 'md' | 'lg';
  position: 'flex-start' | 'center' | 'flex-end';
}

function handleModalSize(size: string): number {
  switch(size) {
    case 'sm': return 500;
    default:
    case 'md': return 700;
    case 'lg': return 1000;
  }
}

export const CloseButton = styled.button`
  z-index: 1000;
      
  padding: 0 10px;
  margin: 0;

  position: absolute;
  right: 0;
  height: 40px;
  width: 42px;

  background: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  
  font-weight: 800;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primaryText};
  
  cursor: pointer;
  
  :hover {
    background: ${({ theme }) => shade(0.1, theme.colors.primary)};
  }
`;

export const Container = styled.div<IModalPropsStd>`
  z-index: 997;
  position: fixed;
  padding: 25px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  backdrop-filter: blur(2px);
  background: rgba(50, 50, 50, 0.5);

  display: flex;
  justify-content: center;
  align-items: ${({ position }) => position};

  > div {
    z-index: 998;
    position: relative;

    width: 100%;
    max-width: ${({ size }) => handleModalSize(size)}px;
    overflow: hidden;

    background: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    box-shadow: 0 2px 8px 1px rgba(10, 10, 10, .8);
    animation: entryAnimation .5s;

    @keyframes entryAnimation {
      0% {
        transform: scale(0.5);
        opacity: 0;
      }
      50% {
        transform: scale(1.01);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
    
  }
`;
