import styled from 'styled-components';

import { shade } from 'polished';

interface IBodyPropsStd {
  textAlign: 'initial' | 'left' | 'right' | 'center' | 'justify' | 'justify-all' | 'start' | 'end' | 'match-parent';
}

export const BodyStyle = styled.div<IBodyPropsStd>`
  background: ${({ theme }) => theme.colors.background};
  
  color: ${({ theme }) => theme.colors.text};
  text-align: ${({ textAlign }) => textAlign};
  
  padding: 10px;

  max-height: calc(100vh - 90px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => shade(0.1, theme.colors.background)}; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => shade(0.1, theme.colors.primary)};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => shade(0.2, theme.colors.primary)};
  }
`;
