import styled from 'styled-components';

export const TableStyled = styled.table`
  border-collapse: collapse;
  text-align: center;
  vertical-align: middle;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const CaptionStyled = styled.caption`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const TdStyled = styled.td`
  padding: 10px;
  color: ${p => p.theme.colors.medGreen};
  background-color: ${p => p.theme.colors.superLightGreen};
  border: 1px solid ${p => p.theme.colors.medGreen};
`;

export const ThStyled = styled.th`
  padding: 20px;
  border: 1px solid ${p => p.theme.colors.medGreen};
`;

export const TheadStyled = styled.thead`
  background-color: ${p => p.theme.colors.medGreen};
  color: ${p => p.theme.colors.superLightgray};
`;
