import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  background-color: rgba(213, 237, 247, 0.7);
  border-radius: 13%;
  padding: 30px;
  margin: 10px auto;
  width: fit-content;

  @media screen and (min-width: 768px) {
    max-width: ${p => p.theme.breakpoints[1]};
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: ${p => p.theme.breakpoints[2]};
    padding: 0 50px;
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: ${p => p.theme.space[5]}px;
`;
export const StyledLink = styled(Link)`
  text-decoration: underline;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.medGreen};
  transition: ${p => p.theme.transitions.main};

  &:hover {
    color: ${p => p.theme.colors.hoverLink};
  }
`;
