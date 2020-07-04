import React from 'react';

import { BodyStyle } from './styles';

interface IBodyPropsCpt {
  textAlign?: 'initial' | 'left' | 'right' | 'center' | 'justify' | 'justify-all' | 'start' | 'end' | 'match-parent';
}

const ModalBody: React.FC<IBodyPropsCpt> = (props) => {
  const {
    children,
    textAlign = 'initial',
  } = props;

  return (
    <>
      <BodyStyle textAlign={textAlign}>
        { children }
      </BodyStyle>
    </>
  );
};

export default ModalBody;
