import styled from 'styled-components';

export const StyledFotter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(180deg, rgba(31,26,36,1) 0%, rgba(31,26,36,0.8703627558479532) 100%);

  border-radius: 14% 14% 0 0;
  color: white;
  font-size: 0.5rem;

  
`;
export const StyledText = styled.p`
  margin-right: 5px;
  font-size: 0.5rem;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-right: 10px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-right: 15px;
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.main};
  }
`;
