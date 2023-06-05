import styled from 'styled-components';

export const Title = styled.h3`
  position: relative;
  font-size: 30px;
  text-align: center;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Icon = styled.button`
  width: 50px;
  height: 50px;
  margin-left: auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
