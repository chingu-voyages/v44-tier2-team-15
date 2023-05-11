import Arena from 'components/Arena/Arena';
import GamePanel from 'components/GamePanel/GamePanel';
import MainContainer from 'components/MainContainer/MainContainer';

const GamePage = () => {
  return (
    <MainContainer>
      <h1>Hello it's game page Robot</h1>
      <div style={{ display: 'flex' }}>
        <GamePanel />
        <Arena />
      </div>
    </MainContainer>
  );
};

export default GamePage;
