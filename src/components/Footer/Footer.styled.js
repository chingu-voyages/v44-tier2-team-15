import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: linear-gradient(
    180deg,
    rgba(31, 26, 36, 1) 0%,
    rgba(31, 26, 36, 0.8703627558479532) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: #fff;
  border-radius: 13% 13% 0 0;
  gap: 20px;
  width: 100%;
  padding: 50px 20px 20px 20px;
  font-size: 0.5rem;
  margin-top: 50px;
`;

export const StyledSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
`;

export const StyledChildContainer = styled.div`
  text-align: center;
`;

export const StyledCopyrightText = styled.p`
  text-align: center;
  font-size: 0.5rem;
  margin-top: 20px;
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
