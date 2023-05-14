import { ArenaWrapp, Game } from './Arena.styled';
import React, { useEffect } from 'react';
import Phaser from 'phaser';
import SceneOne from 'components/Scenes/SceneOne';

const Arena = () => {

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 400,
      height: 400,
      scene: SceneOne,
      // physics: {
      //   default: 'arcade',
      //   arcade: {
      //     gravity: 0,
      //   },
      //   debug: true,
      // },
    }; 


    const game = new Phaser.Game(config);


    return () => {
      game.destroy();
    };
  }, []);

  return (
    <ArenaWrapp>
      Arena
      <Game className='gamecanvas' id="game-container" />
    </ArenaWrapp>
  );


};

export default Arena;
