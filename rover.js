const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   // Write code here!
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
   // STILL WORKING - Confused on how to call imported object properties as a value
   recieveMessage(message) {                                   //'message' parameter should be a 'Message' object         
      let messageInfo = {                               // Declared & initialized a new object to store the message & results properties
         message: message.name,
         results: message.command,
      }
      return messageInfo;                               // receiveMessage() should return data from 'messageInfo' object
   };
}

// let commands = [new Command('MODE_CHANGE', 'LOW-POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);
// let rover = new Rover(98382);                   // Passes 98382 as the rover's position.

// let response = rover.recieveMessage(message);

// console.log(response);



module.exports = Rover;