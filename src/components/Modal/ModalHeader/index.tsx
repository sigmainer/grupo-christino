import React from 'react';

import { HeaderStyle } from './styles';

interface IHeaderPropsCpt {
  align?: 'initial' | 'flex-end' | 'center' | 'flex-start';
  textCase?: 'uppercase' | 'lowercase' | 'initial';
}

const ModalHeader: React.FC<IHeaderPropsCpt> = (props) => {
  const {
    children,
    align = 'center',
    textCase = 'uppercase',
  } = props;

  return (
    <HeaderStyle align={align} textCase={textCase}>
      { children }
    </HeaderStyle>
  );
};

export default ModalHeader;
