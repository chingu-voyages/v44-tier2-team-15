import Leaderboard from 'components/Leaderboard/Leaderboard';
import { PanelWrapp } from './GamePanel.styled';
import GameControlls from 'components/GameControls/GameControls';

const GamePanel = () => {
  return (
    <PanelWrapp>
      <button>Open config settings</button>
      <GameControlls />
      <Leaderboard />
    </PanelWrapp>
  );
};

export default GamePanel;
