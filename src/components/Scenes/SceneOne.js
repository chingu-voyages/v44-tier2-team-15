import Phaser from 'phaser';
import Game_background from '../../images/game/bg_main.png';
// import botOne from 'images/bot_1.png';
// import botTwo from 'images/bot_2.png';
// import bunny from '../../images/game/bunny.png';

class SceneOne extends Phaser.Scene {
    constructor() {
      super({ key: 'sc_one' });
    }

    preload() {
      // load background image
      this.load.image('game_bg', Game_background);
      // this.load.image('rabbit', 'images/bunny.png');
      this.load.image('bot1', 'images/bot_1.png');
      this.load.image('bot2', 'images/bot_2.png');
    }

    create() {
      // Game logic
      this.add.image(0, 0, 'game_bg');
      this.add.image(80,120, 'bot1').setScale(0.5)
      this.add.image(50,70, 'bot2').setScale(0.5);
      // this.add.image(80,80, 'rabbit');



    }

    update() {
      // Game update logic
    }
  }

export default SceneOne;
