import { Link } from 'react-router-dom';
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
  color: ${p => p.theme.colors.superLightgray};
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
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.main};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-right: 10px;
    font-size: ${p => p.theme.fontSizes.s};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-right: 15px;
  }
`;

export const StyledChildContainer = styled.div`
  text-align: center;
`;

export const DevLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const DevLinkItem = styled.li`
  text-align: left;
  font-size: 12px;
`;
export const DevLink = styled(Link)`
  width: 100%;
  transition: ${p => p.theme.transitions.main};
  &:hover {
    color: ${p => p.theme.colors.hoverLink};
  }
`;
export const StyledCopyrightText = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xs};
  margin-top: 10px;
`;
