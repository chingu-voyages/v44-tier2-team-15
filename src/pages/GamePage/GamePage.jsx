import Arena from 'components/Arena/Arena';
import GameName from 'components/GameName/GameName';
import GamePanel from 'components/GamePanel/GamePanel';
import MainContainer from 'components/MainContainer/MainContainer';
import { StyledWrapp } from './GamePage.styled';

const GamePage = () => {
  return (
    <MainContainer>
      <GameName />
      <StyledWrapp>
        <GamePanel />
        <Arena />
      </StyledWrapp>
    </MainContainer>
  );
};

export default GamePage;
