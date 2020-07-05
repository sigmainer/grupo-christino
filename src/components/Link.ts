import styled from 'styled-components';

interface ILinkProps {
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'danger';
  selected?: boolean;
}

export default styled.a<ILinkProps>`
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
    width: ${({ selected }) => (selected ? '90%' : '0')};
    opacity: ${({ selected }) => (selected ? '1' : '0')};

    background: ${({ theme, color }) => theme.colors[color || 'primary']};
    transition: width .50s, opacity .50s;
  }

  :hover {
    ::after {
      width: 90%;
      opacity: 1;
    }
  }
`;
