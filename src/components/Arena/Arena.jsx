import { ArenaWrapp, Game } from './Arena.styled';
import React, { useEffect } from 'react';
import Phaser from 'phaser';
import SceneOne from 'components/Scenes/SceneOne';

const Arena = () => {

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 500,
      height: 535,
      scene: SceneOne,
      parent: "game-container",
      physics: {
        default: 'arcade',
        arcade: {
          gravity: 0,
        },
        debug: true,
      },


      
    }; 


    const game = new Phaser.Game(config);


    return () => {
      game.destroy();
    };
  }, []);

  return (
    <ArenaWrapp>
      <Game className='gamecanvas' id="game-container" />
    </ArenaWrapp>
  );

};

export default Arena;
