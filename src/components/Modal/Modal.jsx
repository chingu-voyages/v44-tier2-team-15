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
        <p>Choose configuration</p>
        <input type="text" />
        <select>
          <option>0</option>
          <option>1</option>
        </select>
        <select>
          <option value="AND">AND</option>
          <option value="OR">OR</option>
          <option value="XOR">XOR</option>
          <option value="NOT">NOT</option>
        </select>
        <div>
          <input type="range" id="speed " name="speed " min="0" max="8" />
          <label htmlFor="speed ">Volume</label>
        </div>
        <select>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
        <button type="button">Save</button>
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
