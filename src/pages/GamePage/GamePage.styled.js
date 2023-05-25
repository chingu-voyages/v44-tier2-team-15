import styled from 'styled-components';

export const StyledWrapp = styled.div`
  display: block;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
