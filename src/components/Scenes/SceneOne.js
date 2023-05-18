import Phaser from 'phaser';
import Game_background from '../../images/game/bg_main.png';

class SceneOne extends Phaser.Scene {
  constructor() {
    super({ key: 'sc_one' });
    this.bots = [];

    // this is user input comming from React
    this.robotData = [
      {
        name:'xylon',
        image:'images/bot_1.png',
        speed: [100,70],
        operand: '&',
        value: 1,
        location: {x:100, y:50},
      },

      {
        name:'megatron',
        image:'images/bot_2.png',
        speed: [70,100],
        operand: '||',
        value: 0,
        location: {x:400, y:100}
      },

      {
        name:'cyclon',
        image:'images/bot_3.png',
        speed: [50,120],
        operand: 'xor',
        value: 0,
        location: {x:100, y:500}

      },

      {
        name:'pylon',
        image:'images/bot_4.png',
        speed: [80,30],
        operand: '&',
        value: 1,
        location: {x:200, y:300}
      }

    ];
  }

  preload() {
    this.load.image('game_bg', Game_background);
    this.robotData.forEach(robotObject => this.loadImage(robotObject)); 
  }

  // Game logic
  create() {  
    
    // Enable physics on the arena
    this.physics.world.enable(this);

    // add images to the scene
    this.add.image(0, 0, 'game_bg');
    this.robotData.forEach(robotObject =>  this.createBots(robotObject));

    //this.ship1 = this.physics.add.image(500, 120, 'bot1').setScale(0.5);
    // this.ship2 = this.physics.add.image(100, 70, 'bot2').setScale(0.5);
    // this.ship3 = this.physics.add.image(150, 500, 'bot3').setScale(0.5);
    // this.ship4 = this.physics.add.image(300, 200, 'bot4').setScale(0.5);

    // add motion to the images
    // this.ship1.setVelocity(100, 20); // Moves the image horizontally at a speed of 100 pixels per second
    // this.ship1.setBounce(1, 1);
    // this.ship1.setCollideWorldBounds(true);
    // this.ship1.collided = false;
    // this.ship1.booleanValue = 1;
    // this.ship1.operator = '&';

    // this.ship2.setVelocity(100, 100); // Moves the image horizontally at a speed of 100 pixels per second
    // this.ship2.setBounce(1, 1);
    // this.ship2.setCollideWorldBounds(true);
    // this.ship2.collided = false;
    // this.ship2.booleanValue = 0;
    // this.ship2.operator = '&';

    // this.ship3.setVelocity(50, 120); // Moves the image horizontally at a speed of 100 pixels per second
    // this.ship3.setBounce(1,1);
    // this.ship3.setCollideWorldBounds(true);
    // this.ship3.collided = false;
    // this.ship3.booleanValue = 1;
    // this.ship3.operator = '&';

    // this.ship4.setVelocity(70, 120); // Moves the image horizontally at a speed of 100 pixels per second
    // this.ship4.setBounce(1, 1);
    // this.ship4.setCollideWorldBounds(true);
    // this.ship4.collided = false;
    // this.ship4.booleanValue = 0;
    // this.ship4.operator = '&';

    this.bots = [this.ship1] //  this.ship2, this.ship3, this.ship4

    // add collision between bots
    // for (let i = 0; i < this.bots.length; i++) {
    //   for (let j = i + 1; j < this.bots.length; j++) {
    //     this.physics.add.collider(this.bots[i], this.bots[j], () => {
    //       // get the velocity of the wiiing body before stopping

    //       this.bots[i].destroy();
    //       this.bots[j].setVelocity(50,100)
    //       // console.log(this.bots[j].body.velocity.x, this.bots[j].body.velocity.y);

    //       // velocity before collison
    //       // console.log("Before collision")
    //       // console.log(this.bots[j].body.velocity.x, this.bots[j].body.velocity.y);


    //       // this.pauseMotion(this.bots[i], this.bots[j]);
    //       // this.bots[i].body.stop();
    //       // this.bots[j].body.stop();
    //       // this.bots[i].setVelocity(0,0);
    //       // this.bots[j].setVelocity(0,0);


    //       // remove the bot from the game
    //       //this.bots[i].destroy();

    //       // this.bots[j].body.setBounce();
          
    //       // resume the motion of the winning bot
    //       // console.log(this.bots[j].velocity)
    //       // console.log("Just after collision")
    //       // console.log(this.bots[j].body.velocity.x, this.bots[j].body.velocity.y);
    //       // console.log("intial velocity")
    //       // console.log(x, y);
    //       // this.bots[j].setVelocityX(x);
    //       // this.bots[j].setVelocityY(y);

    //       // console.log("After resumption")
    //       // console.log(this.bots[j].body.velocity.x, this.bots[j].body.velocity.y);

    //       // console.log(this.bots[j].body)


    //       // mark the bots as collided bots
    //       // this.bots[i].collided = true
    //       // this.bots[j].collided = true

    //       // pause collided bots breifly

    //       // deteremine loosing 

    //       // make loosing bot disapper
    //     });
    //   }
    // }
    


  }

  update() {
    // Game update logic
    // if (this.collided) {
    //   this.pauseScene();
    //   this.collided = false;
    // }
  }

  // helper method definitions
  pauseMotion = (alpha, beta) => {
    // alpha.body.stop();
    // beta.body.stop();

    // Resume velocities after 1 second
    // setTimeout(() => {
    //   this.resumeMotion(alpha);
    // }, 1000);

    // this.ship1.setVisible(false);
  };

  // resumeMotion = (bot) => {
  //   bot.body.resume();
  // };

  loadImage = (robotObject) => {
    this.load.image(robotObject.name, robotObject.image);
    // this.bots.push(this.bot);
  }

  createBots = (robotObject) => {
    this.physics.add.image(robotObject.location.x, robotObject.location.y, robotObject.name).setScale(0.5);
  }

  

}

export default SceneOne;
