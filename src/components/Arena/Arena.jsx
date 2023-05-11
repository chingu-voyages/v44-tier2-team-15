import { ArenaWrapp } from './Arena.styled';
import React, { useEffect } from 'react';
import Phaser from 'phaser';

const Arena = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    const game = new Phaser.Game(config);

    function preload() {
      // Load game assets here
    }

    function create() {
      // Create game objects here
    }

    function update() {
      // Update game state here
    }

    return () => {
      game.destroy();
    };
  }, []);

  return <ArenaWrapp>Arena</ArenaWrapp>;
};

export default Arena;
