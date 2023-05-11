import Phaser from 'phaser';
import Game_background from '../../images/game/bg_main.png';

class SceneOne extends Phaser.Scene {
    constructor() {
      super({ key: 'sc_one' });
    }

    preload() {
      // load background image
      this.load.image('game_bg', Game_background);
    }

    create() {
      // Game logic
      this.add.image(0, 0, 'game_bg')

    }

    update() {
      // Game update logic
    }
  }

export default SceneOne;
