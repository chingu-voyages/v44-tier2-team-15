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
        speed: {x: 100,y: 70},
        operand: '&',
        value: 1,
        location: {x:100, y:50},
      },

      {
        name:'megatron',
        image:'images/bot_2.png',
        speed: {x: 70,y: 100},
        operand: '||',
        value: 0,
        location: {x:400, y:100}
      },

      {
        name:'cyclon',
        image:'images/bot_3.png',
        speed: {x: 50, y: 120},
        operand: 'xor',
        value: 0,
        location: {x:100, y:500}

      },

      {
        name:'pylon',
        image:'images/bot_4.png',
        speed: {x: 80, y: 30},
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

  create() {  
    // Enable physics on the arena
    this.physics.world.enable(this);
    // add images to the scene
    this.add.image(0, 0, 'game_bg');
    // add the robots to the scene
    this.robotData.forEach(robotObject =>  this.createBots(robotObject));
    //add collision between bots
    this.addCollisionBtnBots();
    // add motion to the images
    this.bots.forEach((bot, index) => this.addBehaviour(bot, index));
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
  };

  createBots = (robotObject) => {
    const bot = this.physics.add.image(
      robotObject.location.x,
      robotObject.location.y,
      robotObject.name
    ).setScale(0.5);

    this.bots.push(bot);
  };

  addBehaviour = (bot, index) => {
    const data = this.robotData[index];
    bot.setVelocity(data.speed.x, data.speed.y); // Moves the image horizontally at a speed of 100 pixels per second
    bot.booleanValue = data.value;
    bot.operator = data.operand
    bot.setBounce(1, 1);
    bot.setCollideWorldBounds(true);
    bot.collided = false;
  };

  addCollisionBtnBots = () => {
    for (let i = 0; i < this.bots.length; i++) {
      for (let j = i + 1; j < this.bots.length; j++) {
        this.physics.add.collider(this.bots[i], this.bots[j], () => {this.bots[i].destroy()});
      }
    };
  };
  

}

export default SceneOne;
