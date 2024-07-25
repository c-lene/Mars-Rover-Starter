const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
  
  // Test 7
  test("constructor sets position and default values for mode and generatorWatts" , function() {
    let rover = new Rover(98382);
    
    expect(rover.position).toBe(98382);
    expect(rover.mode).toBe("NORMAL");
    expect(rover.generatorWatts).toBe(110);
  });


  // Test 8
  test("response returned by receiveMessage contains the name of the message", function() {
    let commands = [new Command("MODE_CHANGE", "LOW-POWER"), new Command("STATUS_CHECK")];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.recieveMessage(message);

    expect(response.message).toBe(message.name);
  });




});
