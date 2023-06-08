import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoWrap = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px #b8d0a6 solid;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.55s ease;
  &:hover {
    border: #1f1a24 2px solid;
  }
  &.active {
    border: #1f1a24 2px solid;
  }
`;
export const LogoName = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`;
