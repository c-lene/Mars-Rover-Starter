const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   // Write code here!
   constructor(position, mode = "NORMAL", generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   
   
   // STILL WORKING - Function should update certain properties of the 'rover' object based on different commands in "Rover Command Types" Table
   recieveMessage(message) {                                   //'message' parameter should be a 'Message' object         
      let messageInfo = {                               // Declared & initialized a new object to store the message & results properties
         message: message.name,
         results: message.commands,
      }
      return messageInfo;                               // receiveMessage() should return data from 'messageInfo' object
   };
}



// From Example in Task 4
let commands = [new Command('MODE_CHANGE', 'LOW-POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);                   // Passes 98382 as the rover's position.

let response = rover.recieveMessage(message);


// Testing to see the Outputs 
console.log(commands);
console.log("---------------------------------------------------------------------");
console.log(message);
console.log("---------------------------------------------------------------------");
console.log(response);
console.log("");

console.log(response.message);


module.exports = Rover;