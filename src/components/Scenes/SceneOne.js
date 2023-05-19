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
        operator: 'NAND',
        value: 1,
        location: {x:100, y:50},
      },

      {
        name:'megatron',
        image:'images/bot_2.png',
        speed: {x: 70,y: 100},
        operator: 'OR',
        value: 0,
        location: {x:400, y:100}
      },

      {
        name:'cyclon',
        image:'images/bot_3.png',
        speed: {x: 50, y: 120},
        operator: 'XOR',
        value: 0,
        location: {x:100, y:500}

      },

      {
        name:'pylon',
        image:'images/bot_4.png',
        speed: {x: 80, y: 30},
        operator: 'XNOR',
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
    // add background to the scene
    this.add.image(0, 0, 'game_bg');
    // add the robots to the scene
    this.robotData.forEach(robotObject =>  this.createBots(robotObject));
    //add collision between bots
    this.addCollisionBtnBots();
    // add motion to the images
    this.bots.forEach((bot, index) => this.addBehaviour(bot, index));
  }

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
    bot.value = data.value;
    bot.operator = data.operator
    bot.setBounce(1, 1);
    bot.setCollideWorldBounds(true);
    bot.speed = [data.speed.x, data.speed.y]
  };

  addCollisionBtnBots = () => {
    for (let i = 0; i < this.bots.length; i++) {
      for (let j = i + 1; j < this.bots.length; j++) {
        this.physics.add.collider(this.bots[i], this.bots[j], () => {
          this.momentaryFreeze(this.bots[i], this.bots[j]);
        });
      }
    };
  };
 
  logicWar = (bot, oponentValue) => {
    // AND, OR, XOR, NAND, NOR, XNOR
    let result = false;
    if(bot.operator === 'AND'){
      result = bot.value && oponentValue
    }else if(bot.operator === 'OR'){
      result = bot.value || oponentValue
    }else if(bot.operator === 'NOR'){
      result = !(bot.value || oponentValue)
    }else if(bot.operator === 'NAND'){
      result = !(bot.value && oponentValue)
    }else if(bot.operator === 'NOR'){
     result = bot.value ^ oponentValue
    }else if(bot.operator === 'XNOR'){
      result = !(bot.value ^ oponentValue)
    };
    return result;
  }

  destroyLoser = (botX, botY) => {
    const botXResult = this.logicWar(botX, botY.value);
    const botYResult = this.logicWar(botY, botX.value);
    let winner = []; //both bots are winners initially

    if(botYResult && botXResult) {// its a tie, no winner, both bots survive
      winner = [botX, botY];
    }else if(!(botYResult || botXResult)){//its a loss, both lose
      botX.destroy();
      botY.destroy();
    }else if(botYResult){ // botY wins
      botX.destroy();
      winner = [botY];
    }else if(botXResult){ // botX wins
      botY.destroy();
      winner = [botX];
    }
    return winner;
  }

  momentaryFreeze = (botX, botY) => {
    // freeze the colliding bots
    botX.body.setVelocity(0, 0);;
    botY.body.setVelocity(0, 0);;
    setTimeout(() => {
      // destroy the losing bot
      const winner = this.destroyLoser(botX, botY);
      // resume motion for the winning bot
      this.resumeMotion(winner);
    }, 1000);
  }

  resumeMotion = (winner) => {
    if (winner.length) {
      winner.forEach(bot => bot.body.setVelocity(bot.speed[0], bot.speed[1])); 
    }
  };

}

export default SceneOne;
