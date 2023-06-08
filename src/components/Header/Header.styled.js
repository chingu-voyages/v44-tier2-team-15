import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  right: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 33px 9%;
  border-bottom: 2px solid #1f1a24;
  border-radius: 13%;
  margin-bottom: 50px;
`;

export const HeaderListStyled = styled.ul`
  display: flex;
`;

export const ListItemStyled = styled(NavLink)`
  margin-left: 60px;
  border-bottom: 2px solid transparent;
  transition: ${p => p.theme.transitions.main};
  &:hover {
    color: ${p => p.theme.colors.activeHeaderLink};
    border-color: ${p => p.theme.colors.activeHeaderLink};
  }
  &.active {
    color: ${p => p.theme.colors.activeHeaderLink};
    border-color: ${p => p.theme.colors.activeHeaderLink};
  }
`;
