const Message = require('./message.js');
const Command = require('./command.js');


class Rover {
   // Write code here!
   constructor(position, mode = "NORMAL", generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   
   
   // Function should update certain properties of the 'rover' object based on different commands in "Rover Command Types" Table
   recieveMessage(message) {                                      //'message' parameter should be a 'Message' object         

      let messageInfo = {                                         // Declared & initialized a new object to store the message & results properties
         message: message.name,
         results: [],                                             // 'results' array to store corresponding objects in message.commands
      } // end of messageInfo()   
         
         
         
            
      let newResults = {};                                        // Created new object to temporarily store values 
            
      for (let i = 0; i < message.commands.length; i++) {         // Used a For Loop to iterate through the array of commands in message.commands
               
         if (message.commands[i].commandType === "MODE_CHANGE") {          // Using If statements to compare if certain commands are present

            // newResults = {completed: true};
            // rover.mode = message.commands[i].value;                     // ORIGINAL CODE
            this.mode = message.commands[i].value;                         // Trying out using this. as object placeholder

            if (message.commands[i].value === "LOW-POWER") {               // Added IF statement to change 'completed' property to "false"
               newResults = {completed: false};
               
            } else {
               newResults = {completed: true};
            }
            
            messageInfo.results.push(newResults);

         } else if (message.commands[i].commandType === "MOVE") {

            // rover.position = message.commands[i].value;                    // ORIGINAL CODE
            this.position = message.commands[i].value;                    // Trying out using this. as object placeholder
            
            newResults = {completed: true};
            messageInfo.results.push(newResults);

         } else if (message.commands[i].commandType === "STATUS_CHECK") {
            
            newResults = {
                  completed: true, 
                  // roverStatus: {mode: rover.mode, generatorWatts: rover.generatorWatts, position: rover.position},      // ORIGINAL CODE
                  roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position},            // Trying out using this. as object placeholder
            };
            messageInfo.results.push(newResults);

         } else {
            newResults = {completed: false};
            messageInfo.results.push(newResults);

         } // end of if statements
      
      } // end of for Loop

      return messageInfo;                               // receiveMessage() should return data from 'messageInfo' object
   
   }; // end of receiveMessage()
}



// From Example in Task 4
// let commands = [new Command('MODE_CHANGE', 'LOW-POWER'), new Command('STATUS_CHECK')];          // ORIGINAL Example 
// let commands = [new Command('MODE_CHANGE', 'NORMAL'), new Command('STATUS_CHECK')];             // Testing out different data
// let commands = [new Command('MOVE', 123456)];                         // Testing out different data


// let message = new Message('Test message with two commands', commands);                          // ORIGINAL Example
// let message = new Message('Test message with a single command', commands);                             // Testing out different data

// let rover = new Rover(98382);                         // Passes 98382 as the rover's position.
// let rover = new Rover(123456);                     // Testing out different data


// let response = rover.recieveMessage(message);      // ORIGINAL Example
// rover.recieveMessage(message);         // Testing out different data


// Testing to see the Outputs 
// console.log(commands);
// console.log("-------------------------^^^ Outputs 'commands' ^^^--------------------------------------------");
// console.log(message);
// console.log("-------------------------^^^ Outputs 'message' ^^^--------------------------------------------");
// console.log("~~~~~~~ 'response' output ~~~~~~~")
// console.log(response);
// console.log("");

// console.log("~~~~~~~ 'response' result output ~~~~~~~")
// console.log(response.results);
// console.log("");

// console.log(response.results[0]);
// console.log("");


// console.log(response);
// console.log(response.results);
// console.log("");

// Test Output of 'roverStatus' mode property
// console.log(`For "STATUS_CHECK" command, roverStatus mode check: ${response.results[1].roverStatus.mode}`);

// Test Output of current 'rover' mode property
// console.log(rover);
// console.log("");

// console.log(`Current state of 'rover' object mode check: ${rover.mode}`);
// console.log(`Current state of 'rover' object mode check: ${rover.position}`);
// console.log("");


module.exports = Rover;