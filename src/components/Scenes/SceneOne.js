import Phaser from 'phaser';
import Game_background from '../../images/game/bg_main.png';
import botOne from '../../images/ships/bot_1.png';
import botTwo from '../../images/ships/bot_2.png';

class SceneOne extends Phaser.Scene {
    constructor() {
      super({ key: 'sc_one' });
    }

    preload() {
      // load background image
      this.load.image('game_bg', Game_background);
      this.load.image('bot1', botOne);
      this.load.image('bot2', botTwo);
    }

    create() {
      // Game logic
      this.add.image(10,10, 'bot1').setScale(0.2);
      this.add.image(50,70, 'bot2').setScale(0.2);
      this.add.image(0, 0, 'game_bg')



    }

    update() {
      // Game update logic
    }
  }

export default SceneOne;
