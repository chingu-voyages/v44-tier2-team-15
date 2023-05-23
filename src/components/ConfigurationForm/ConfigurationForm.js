import { useState } from 'react';

import {
  BtnSubmit,
  CheckBox,
  Form,
  Input,
  InputName,
  InputWrap,
  LabelStyled,
  SelectStyled,
} from './ConfigurationForm.styled';

const ConfigurationForm = ({ onClose }) => {
  const [botNameOne, setBotNameOne] = useState('');
  const [boolNumberOne, setBoolNumberOne] = useState('0');
  const [checked, setChecked] = useState(false);
  const [botNameTwo, setBotNameTwo] = useState('');
  const [boolNumberTwo, setBoolNumberTwo] = useState('0');
  const [speed, setSpeed] = useState('0');
  const [operation, setOperation] = useState('AND');
  const [direction, setDirection] = useState('North');

  const handleChange = e => {
    switch (e.target.id) {
      case 'name1':
        const bot =
          e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        setBotNameOne(bot);

        break;
      case 'number1':
        setBoolNumberOne(e.target.value);

        break;
      case 'skipBot':
        setChecked(prevState => (prevState === false ? true : false));
        break;
      case 'name2':
        const bot2 =
          e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        if (botNameOne === bot2) {
          console.log('Please change the name for second bot');
        }
        setBotNameTwo(bot2);

        break;

      case 'number2':
        setBoolNumberTwo(e.target.value);

        break;
      case 'operation':
        setOperation(e.target.value);

        break;
      case 'speed':
        setSpeed(e.target.value);

        break;
      case 'direction':
        setDirection(e.target.value);

        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (botNameOne === botNameTwo) {
      console.log('Sorry the names are same');
      return;
    } else {
      const firstBot = {
        botName1: botNameOne,
        botNumber1: boolNumberOne,
      };
      const secondtBot = {
        botName2: botNameTwo,
        botNumber2: boolNumberTwo,
      };
      const data = {
        bots: checked ? [firstBot, secondtBot] : [firstBot],
        checked,
        speed: speed,
        operation: operation,
        direction: direction,
      };

      const config = JSON.stringify(data);
      localStorage.setItem('configs', config);
      onClose();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrap>
        <>
          <LabelStyled htmlFor="name1">
            Name for bot 1:
            <InputName
              id="name1"
              type="text"
              name="name1"
              onChange={handleChange}
            />
          </LabelStyled>
          <LabelStyled>
            Boolean for bot 1:
            <SelectStyled
              id="number1"
              autoFocus={true}
              defaultValue={boolNumberOne}
              onChange={handleChange}
            >
              <option value="0">0</option>
              <option value="1">1</option>
            </SelectStyled>
          </LabelStyled>
        </>

        <>
          <LabelStyled
            htmlFor="skipBot"
            style={{
              color: '#52615d',
              justifyContent: 'start',
              margin: '22px auto 22px auto',
            }}
          >
            Add second bot?
            <CheckBox
              id="skipBot"
              name="skipBot"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            />
          </LabelStyled>
          {checked && (
            <>
              <LabelStyled htmlFor="name2">
                Name for bot 2:
                <InputName
                  id="name2"
                  type="text"
                  name="name2"
                  onChange={handleChange}
                />
              </LabelStyled>
              <LabelStyled>
                Boolean for bot 2:
                <SelectStyled
                  id="number2"
                  autoFocus={true}
                  defaultValue={boolNumberTwo}
                  onChange={handleChange}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                </SelectStyled>
              </LabelStyled>
            </>
          )}
        </>
      </InputWrap>
      <LabelStyled>
        Boolean operation:
        <SelectStyled
          id="operation"
          autoFocus={true}
          defaultValue={operation}
          onChange={handleChange}
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
          <option value="XOR">XOR</option>
          <option value="NOT">NOT</option>
        </SelectStyled>
      </LabelStyled>
      <LabelStyled htmlFor="speed">
        Volume:
        <Input
          type="range"
          id="speed"
          name="speed"
          min="0"
          max="10"
          step={1}
          value={speed}
          onChange={handleChange}
        />
      </LabelStyled>
      <LabelStyled>
        Direction:
        <SelectStyled
          id="direction"
          autoFocus={true}
          defaultValue={direction}
          onChange={handleChange}
        >
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </SelectStyled>
      </LabelStyled>
      <BtnSubmit type="click">Save</BtnSubmit>
    </Form>
  );
};

export default ConfigurationForm;
