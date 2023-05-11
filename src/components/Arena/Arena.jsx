import { ArenaWrapp } from './Arena.styled';
import React, { useEffect } from 'react';
import Phaser from 'phaser';

const Arena = () => {

  useEffect(() => {

    
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: GameScene,
      
      // {
      //   preload: preload,
      //   create: create,
      //   update: update,
      // },
    };

    const game = new Phaser.Game(config);
    game.scene.add('game', GameScene, true);


    return () => {
      game.destroy();
    };
  }, []);

  return <ArenaWrapp>Arena</ArenaWrapp>;
  // return <div id="game-container" />;
};

export default Arena;
