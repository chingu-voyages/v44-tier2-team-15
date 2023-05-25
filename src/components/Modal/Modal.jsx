import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalDiv, Overlay, Title } from './Modal.styled';
import ConfigurationForm from 'components/ConfigurationForm/ConfigurationForm';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose }) => {
  const closeByBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const closeByEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={closeByBackdrop}>
      <ModalDiv>
        <Title>Choose your configurations</Title>
        <ConfigurationForm onClose={onClose} />
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
