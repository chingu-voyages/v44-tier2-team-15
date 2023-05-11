import Phaser from 'phaser';

class SceneOne extends Phaser.Scene {
    constructor() {
      super({ key: 'scene1' });
    }

    preload() {
      // load background image
      this.load.image('background', '../../images/bg/uncolored.png');
    }

    create() {
      // Game logic
      this.add.image(240, 320, 'background')
    }

    update() {
      // Game update logic
    }
  }

export default SceneOne;
