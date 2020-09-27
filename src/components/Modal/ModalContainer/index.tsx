import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

import { Container, CloseButton } from './styles';

interface IModalPropsCpt {
  open: boolean;
  onClose(): void;
  onCloseCallback?(): void;
  backdropClose?: boolean;
  closeButton?: boolean;
  position?: 'flex-start' | 'center' | 'flex-end';
  size?: 'sm' | 'md' | 'lg';
}

const Modal: React.FC<IModalPropsCpt> = ({
  children,
  open,
  onClose,
  onCloseCallback,
  closeButton = true,
  backdropClose = true,
  size = 'md',
  position = 'center',
}) => {
  const handleClose = () => {
    onClose();

    if(onCloseCallback) {
      onCloseCallback();
    }
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>): void => {
    if(backdropClose && (e.target as HTMLElement).id === 'modal') {
      handleClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
  }, [open]);

  return (
    <>
      {open && (
        <Container id="modal" onClick={handleOutsideClick} size={size} position={position}>
          <div>
            {closeButton && (
            <CloseButton type="button" onClick={handleClose}>
              <MdClose />
            </CloseButton>
            )}
            { children }
          </div>
        </Container>
      )}
    </>
  );
};

export default Modal;
