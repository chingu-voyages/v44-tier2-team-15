import Phaser from 'phaser';
import Game_background from '../../images/game/bg_main.png';


class SceneOne extends Phaser.Scene {
    constructor() {
      super({ key: 'sc_one' });
      // this.bot1 = null;
      // this.bot2 = null;
    }

    preload() {
      // load background image
      this.load.image('game_bg', Game_background);
      // the images below should be placed in the public directory
      this.ship1 = this.load.image('bot1', 'images/bot_1.png');
      this.ship2 = this.load.image('bot2', 'images/bot_2.png');
    }

    // Game logic
    create() {      // Game logic

      // set up the game world
      this.physics.world.enable(this);

      // add images to the scene
      this.add.image(0, 0, 'game_bg');
      this.ship1 = this.physics.add.image(80,120, 'bot1').setScale(0.5)
      this.ship2 = this.physics.add.image(50,70, 'bot2').setScale(0.5);

      // add motion to the images
      this.ship1.setVelocity(100, 20); // Moves the image horizontally at a speed of 100 pixels per second
      this.ship1.setBounce(1, 1);
      this.ship1.setCollideWorldBounds(true);

      this.ship2.setVelocity(100, 100); // Moves the image horizontally at a speed of 100 pixels per second
      this.ship2.setBounce(1, 1);
      this.ship2.setCollideWorldBounds(true);

      // add collision between bots
      this.physics.add.collider(this.ship1, this.ship2)



    }

    update() {
      // Game update logic
    }
  }

export default SceneOne;
