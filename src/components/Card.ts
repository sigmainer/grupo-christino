import styled, { css } from 'styled-components';

interface ICardProps {
  height?: string | number;
}

interface ICardHeaderProps {
  align?: 'initial' | 'flex-end' | 'center' | 'flex-start';
  textCase?: 'uppercase' | 'lowercase' | 'initial';
  variant?: 'info' | 'warning' | 'danger' | 'success' | 'primary' | 'secondary';
}

interface ICardBodyProps {
  textAlign?: 'initial' | 'left' | 'right' | 'center' | 'justify' | 'justify-all' | 'start' | 'end' | 'match-parent';
}

export const CardHeader = styled.div<ICardHeaderProps>`
  font-weight: 800;
  font-size: 16px;
  text-transform: ${({ textCase }) => textCase || 'uppercase'};
  
  color: ${({ theme, variant }) => theme.colors[`${variant || 'primary'}Text`]};
  background: ${({ theme, variant }) => theme.colors[variant || 'primary']};
  
  display: flex;
  justify-content: ${({ align }) => align || 'center'};
  align-items: center;

  height: 40px;
`;

export const CardBody = styled.div<ICardBodyProps>`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: ${({ textAlign }) => textAlign || 'initial'};

  height: calc(100% - 40px);
`;

export const Card = styled.div<ICardProps>`
  box-shadow: 0 2px 8px 1px ${({ theme }) => theme.colors.shaddow};
  border-radius: 20px;
  overflow: hidden;
  ${({ height }) => (
    height && css`
      height: ${(typeof height === 'number' ? `${height}px` : height)};
    `
  )}

  > ${CardHeader},
  > ${CardBody} {
    padding: 10px;
  }
`;
