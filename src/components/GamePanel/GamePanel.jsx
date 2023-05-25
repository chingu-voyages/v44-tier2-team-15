import { useState } from 'react';
import GameControlls from 'components/GamePanel/GameControls/GameControls';
import Leaderboard from 'components/GamePanel/Leaderboard/Leaderboard';
import { BtnStyled, PanelWrapp } from './GamePanel.styled';
import Modal from 'components/Modal';
import ConfigurationPanel from 'components/ConfigurationPanel/ConfigurationPanel';

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
      {isModalShown && (
        <Modal onClose={toogleModal}>
          <ConfigurationPanel onClose={toogleModal} />
        </Modal>
      )}
    </>
  );
};

export default GamePanel;
