import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledText = styled.p`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  width: 100%;
  text-align: center;
  font-size: 30px;
  color: ${p => p.theme.colors.medGreen};
`;

export const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.medBrown};
  text-decoration: underline;
`;
