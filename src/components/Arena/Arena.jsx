import { ArenaWrapp } from './Arena.styled';
import React, { useEffect } from 'react';
import Phaser from 'phaser';
import SceneOne from 'components/Scenes/SceneOne';

const Arena = () => {

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
    }; 


    const game = new Phaser.Game(config);
    game.scene.add('sc_one', SceneOne, true);


    return () => {
      game.destroy();
    };
  }, []);

  return <ArenaWrapp>Arena</ArenaWrapp>;
  // return <div id="game-container" />;
};

export default Arena;
