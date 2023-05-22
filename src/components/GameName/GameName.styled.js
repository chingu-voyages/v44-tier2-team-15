import styled from 'styled-components';

export const Title = styled.h1`
  position: absolute;
  margin-top: 10px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
`;
