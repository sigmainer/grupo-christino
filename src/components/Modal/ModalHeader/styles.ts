import styled, { css } from 'styled-components';

interface IHeaderPropsStd {
  align: 'initial' | 'flex-end' | 'center' | 'flex-start';
  variant?: 'info' | 'warning' | 'danger' | 'success' | 'primary' | 'secondary';
  textCase: 'uppercase' | 'lowercase' | 'initial';
}

export const HeaderStyle = styled.div<IHeaderPropsStd>`
  position: relative;

  font-weight: 800;
  font-size: 16px;
  text-transform: ${({ textCase }) => textCase};
  color: ${({ theme, variant }) => theme.colors[`${variant || 'primary'}Text`]};
  background: ${({ theme, variant }) => theme.colors[variant || 'primary']};

  display: flex;
  justify-content: ${({ align }) => align};
  align-items: center;

  height: 40px;
  padding: 10px;
  ${({ align }) => {
    if(align === 'flex-end') {
      return (css`
        padding-right: 45px;
      `);
    }

    return null;
  }};

`;
