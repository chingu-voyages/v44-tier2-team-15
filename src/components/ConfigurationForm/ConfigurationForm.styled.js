import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: ${p => (p.styled === true ? 'row' : 'column')};
  gap: 10px;
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SelectStyled = styled.select`
  min-width: 100px;
  height: 51px;
  margin: 22px 0 22px auto;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.content};
  text-align: center;
  color: ${p => p.theme.colors.medGreen};
  background-color: ${p => p.theme.colors.superLightGreen};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;

  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 130px;
    height: 55px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 16px;
    width: 160px;
    height: 65px;
  }
  option {
    color: ${p => p.theme.colors.medGreen};
    background: ${p => p.theme.colors.superLightGreen};
    font-weight: ${p => p.theme.fontWeights.normal};
    display: flex;
    white-space: pre;
    min-height: 30px;
    padding: 0px 3px 3px;
  }
`;
export const LabelStyled = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.superDarkGreen};
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background-color: ${p => p.theme.colors.medBrown};
  &:checked {
    color: red;
    background-color: ${p => p.theme.colors.medBrown};
    box-shadow: 0 0 0 3px ${p => p.theme.colors.medBrown};
  }
  input:checked + label {
    color: red;
  }
`;
export const InputName = styled.input`
  width: 150px;
  height: 50px;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  border: none;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 12px;
  line-height: 18px;
  padding: 0 32px 0 32px;
  margin: 10px 0 10px 10px;
  color: ${p => p.theme.colors.medGreen};
  background: ${p => p.theme.colors.superLightGreen};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 200px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &:hover {
    border: none;
    outline: none;
  }
  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
  &:placeholder-shown {
    font-size: 11px;
  }
`;

export const Input = styled.input`
  color: ${p => p.theme.colors.superLightGreen};
  background: ${p => p.theme.colors.lightGreen};
`;

export const BtnSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  min-width: 113px;
  margin-left: auto;
  margin-top: ${p => p.theme.space[2]}px;
  margin-right: auto;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 18px;
  padding: 0 32px 0 32px;
  font-size: 14px;
  color: ${p => p.theme.colors.superDarkGreen};
  padding: 16px 32px;
  background-color: ${p => p.theme.colors.superLightGreen};
  outline: none;
  border: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  text-align: center;
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};
  &:hover {
    background: ${p => p.theme.colors.superDarkGreen};
    color: ${p => p.theme.colors.superLightgray};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 18px 52px;
    min-width: 130px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: 23px 52px;
    min-width: 160px;
  }
`;
