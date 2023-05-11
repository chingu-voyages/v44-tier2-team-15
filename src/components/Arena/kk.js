import React, { useEffect } from 'react';
import Phaser from 'phaser';

const GameComponent = () => {
  useEffect(() => {
    const config = {
      // Phaser configuration options
      // ...
    };

    const game = new Phaser.Game(config);

    class GameScene extends Phaser.Scene {
      constructor() {
        super({ key: 'game' });
      }

      preload() {
        this.load.image('myImage', 'path/to/image.png');
      }

      create() {
        // Game logic
      }

      update() {
        // Game update logic
      }
    }

    game.scene.add('scene1', GameScene, true);

    return () => {
      game.destroy();
    };
  }, []);

  return <div id="game-container" />;
};

export default GameComponent;
