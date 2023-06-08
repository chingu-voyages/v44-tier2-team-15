import styled from 'styled-components';

export const PanelWrapp = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 51px;
  width: 160px;
  margin: ${p => p.theme.space[5]}px;
  padding: 16px 32px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.main};
  text-align: center;
  color: ${p => p.theme.colors.superLightgray};
  background-color: ${p => p.theme.colors.medGreen};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${p => p.theme.colors.medBrown};
    color: ${p => p.theme.colors.sandy};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 18px 52px;
    height: 55px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: 23px 52px;
    width: 200px;
    height: 65px;
  }
`;
