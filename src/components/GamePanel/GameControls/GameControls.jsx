import { useState } from 'react';
import { BtnStyled } from './GameControls.styled';

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
    <div>
      <BtnStyled type="button" onClick={handleClick}>
        {buttonText}
      </BtnStyled>
    </div>
  );
};

export default GameControlls;
