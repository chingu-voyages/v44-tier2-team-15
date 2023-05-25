import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 750px;
  padding: 30px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  overflow-y: auto;
  color: ${p => p.theme.colors.superDarkGreen};
  background-color: ${p => p.theme.colors.lightGreen};
`;
