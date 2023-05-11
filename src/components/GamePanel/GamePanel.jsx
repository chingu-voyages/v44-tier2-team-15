import { useState } from 'react';
import GameControlls from 'components/GameControls/GameControls';
import Leaderboard from 'components/Leaderboard/Leaderboard';
import { PanelWrapp, BtnStyled } from './GamePanel.styled';
import Modal from 'components/Modal';

const GamePanel = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const toogleModal = () => {
    setIsModalShown(prevState => !prevState);
  };
  return (
    <>
      <PanelWrapp>
        <BtnStyled type="button" onClick={toogleModal}>
          Open settings
        </BtnStyled>
        <GameControlls />
        <Leaderboard />
      </PanelWrapp>
      {isModalShown && <Modal onClose={toogleModal} />}
    </>
  );
};

export default GamePanel;
