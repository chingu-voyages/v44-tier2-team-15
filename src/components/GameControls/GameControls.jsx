import { useState } from 'react';
import { ControllsWrapp, BtnStyled } from './GameControls.styled';

const GameControlls = () => {
  const [isButtleOn, setIsButtleOn] = useState(false);
  const handleClick = () => {
    if (!isButtleOn) {
      setIsButtleOn(true);
    } else {
      setIsButtleOn(false);
    }
  };

  const buttonText = isButtleOn ? 'Stop' : 'Battle';
  return (
    <ControllsWrapp>
      <BtnStyled type="button" onClick={handleClick}>
        {buttonText}
      </BtnStyled>
    </ControllsWrapp>
  );
};

export default GameControlls;
