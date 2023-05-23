import Arena from 'components/Arena/Arena';

import GamePanel from 'components/GamePanel/GamePanel';
import MainContainer from 'components/MainContainer/MainContainer';
import { StyledWrapp } from './GamePage.styled';

const GamePage = () => {
  return (
    <MainContainer>
      <StyledWrapp>
        <GamePanel />
        <Arena />
      </StyledWrapp>
    </MainContainer>
  );
};

export default GamePage;
