import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface IButtonProps {
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'danger';
}

const commonConfig = css`
  padding: 10px;
  cursor: pointer;

  border: none;
  background: none;
  text-decoration: none;

  font-weight: 800;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};

  position: relative;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;

    height: 5px;
    width: 0;
    opacity: 0;

    background: ${({ theme }) => theme.colors.primary};
    transition: width .5s, opacity .5s;
  }

  :hover {
    ::after {
      width: 90%;
      opacity: 1;
    }
  }
`;

export const Button = styled.button<IButtonProps>`
  ${commonConfig};

  :hover,
  :focus {
    color: ${({ theme }) => shade(0.5, theme.colors.primary)};
  }
`;

export const Link = styled.a<IButtonProps>`
  ${commonConfig}
`;
