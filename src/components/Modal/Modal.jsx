import { useEffect } from 'react';
import { ModalDiv, Overlay } from 'components/Modal/Modal.styled';
import { createPortal } from 'react-dom';

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
        <div> There will be settiongs info</div>
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
