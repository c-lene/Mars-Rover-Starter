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


  // Test 9
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command("MODE_CHANGE", "LOW-POWER"), new Command("STATUS_CHECK")];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.recieveMessage(message);
    
    expect(response.results.length).toBe(message.commands.length);
    // expect(response.results.length).toBe(2);
  });


  // Test 10
  test("responds correctly to the status check command", function() {
    let commands = [new Command("MODE_CHANGE", "LOW-POWER"), new Command("STATUS_CHECK")];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.recieveMessage(message);

    // let statusCheckResult = response.results[1].roverStatus.mode;

    expect(response.results[1].roverStatus).toMatchObject(rover);
    // expect(response.results[1].roverStatus.generatorWatts).toBe(rover.generatorWatts);
    // expect(response.results[1].roverStatus.position).toBe(rover.position);
    // expect(response.results[1].roverStatus.mode).toBe(rover.mode);                            
  });


  // Test 11
  test("responds correctly to the mode change command", function() {
    
    //Testing "NORMAL" mode corresponds correctly to "completed: true"
    let commands = [new Command("MODE_CHANGE", "NORMAL"), new Command("STATUS_CHECK")];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.recieveMessage(message);

    expect(response.results[0].completed).toBe(true);

  });


  // Test 12
  test("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    
    //Testing "LOW-POWER" mode corresponds correctly to "completed: false"
    let commands = [new Command("MODE_CHANGE", "LOW-POWER"), new Command("STATUS_CHECK")];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.recieveMessage(message);

    expect(response.results[0].completed).toBe(false);

  });


  // Test 13
  test("responds with the position for the move command", function() {
    
    let commands = [new Command("MOVE", 123456)];
    let message = new Message("Test message with a single command", commands);
    let rover = new Rover(98382);
    rover.recieveMessage(message);                               // This function should update the position from "98382" to "123456"

    expect(rover.position).toBe(123456);                        

  });

});