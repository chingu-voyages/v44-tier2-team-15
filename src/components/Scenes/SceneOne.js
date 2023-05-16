import Phaser from 'phaser';
import Game_background from '../../images/game/bg_main.png';

class SceneOne extends Phaser.Scene {
  constructor() {
    super({ key: 'sc_one' });
    this.collided = false;

    // the robots array declared to simplify adding collison between them.
    this.botsArray = [];
  }

  preload() {
    // load background image
    this.load.image('game_bg', Game_background);

    // the images below should be placed in the public directory
    this.ship1 = this.load.image('bot1', 'images/bot_1.png');
    this.ship2 = this.load.image('bot2', 'images/bot_2.png');
    this.ship3 = this.load.image('bot3', 'images/bot_3.png');
    this.ship4 = this.load.image('bot4', 'images/bot_4.png');
    this.botsArray = [this.ship1, this.ship2, this.ship3, this.ship4]
  }

  // Game logic
  create() {
    // Enable physics on the arena
    this.physics.world.enable(this);

    // add images to the scene
    this.add.image(0, 0, 'game_bg');
    this.ship1 = this.physics.add.image(500, 120, 'bot1').setScale(0.5);
    this.ship2 = this.physics.add.image(100, 70, 'bot2').setScale(0.5);
    this.ship3 = this.physics.add.image(150, 500, 'bot3').setScale(0.5);
    this.ship4 = this.physics.add.image(300, 200, 'bot4').setScale(0.5);

    // add motion to the images
    this.ship1.setVelocity(100, 20); // Moves the image horizontally at a speed of 100 pixels per second
    this.ship1.setBounce(1, 1);
    this.ship1.setCollideWorldBounds(true);
    this.ship1.booleanValue = 1;
    this.ship1.operator = '&';

    this.ship2.setVelocity(100, 100); // Moves the image horizontally at a speed of 100 pixels per second
    this.ship2.setBounce(1, 1);
    this.ship2.setCollideWorldBounds(true);
    this.ship2.booleanValue = 0;
    this.ship2.operator = '&';

    this.ship3.setVelocity(50, 120); // Moves the image horizontally at a speed of 100 pixels per second
    this.ship3.setBounce(1, 1);
    this.ship3.setCollideWorldBounds(true);
    this.ship3.booleanValue = 1;
    this.ship3.operator = '&';

    this.ship4.setVelocity(70, 120); // Moves the image horizontally at a speed of 100 pixels per second
    this.ship4.setBounce(1, 1);
    this.ship4.setCollideWorldBounds(true);
    this.ship4.booleanValue = 0;
    this.ship4.operator = '&';

    // add collision between bots
    this.physics.add.collider(this.ship1, this.ship2, () => {
      console.log('collision');
      this.collided = true;
    });

    
  }

  update() {
    // Game update logic
    if (this.collided) {
      this.pauseScene();
      this.collided = false;
    }
  }

  // helper method definitions
  pauseScene = () => {
    this.physics.world.pause();

    // Resume velocities after 1 second
    setTimeout(() => {
      this.resumeScene();
    }, 1000);

    this.ship1.setVisible(false);
  };

  resumeScene = () => {
    // Resume the velocities of the objects
    this.physics.world.resume();
  };
}

export default SceneOne;
