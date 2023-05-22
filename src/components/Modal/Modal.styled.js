import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 800px;
  padding: 40px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.superLightgray};
  background-color: ${p => p.theme.colors.medGreen};
`;
