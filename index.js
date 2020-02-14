/**
 *    Week 2 BCA Project:
 *    Zorkington - a text based adventure game 
 *    Developed by: Jay Subedi, Jon Russel
 *    Date: 2/14/2020
 */

// readline code-------------------------
const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
// end readline code------------------------

// setting up the game classes & constructors
class Gamestate {
  constructor(userName) {
    this.currentRoom = rooms.room1;
    this.user = new Player(userName);
  }

  moveToRoom(nextRoom) {
    this.currentRoom = rooms[nextRoom];
  }

  printState() {
    console.log(this);
  }
}

// setting up Room classes & constructor
class Room {
  constructor(roomName, description, inventory, isLocked) {
    this.roomName = roomName;
    this.description = description[this.roomDescriptions];
    this.inventory = inventory || [];
    this.isLocked = isLocked(true, false);
  }

  addInventory(item) {
    this.inventory.push(item);
  }
  removeInventory(item) {
    this.inventory.splice(this.inventory.indexOf(item), 1)
  }
  showInventory() {
    console.log("Here you find: " + this.inventory);
  }
  unlockDoor(input) {
    let passowrd = "00000"
    if (input.includes(password)) {
      return true;
    }
  }
}

//Setting up Player class and constructor
class Player {
  constructor(name, inventory) {
    this.name = name;
    this.inventory = inventory || [];
  }
  checkName() {
    return this.name;
  }
  getInventory(item) {
    global.game.currentRoom.removeInventory(item);
    this.inventory.push(item);
  }
  dropInventory(item) {
    this.inventory.splice(this.inventory.indexOf(item), 1);
    global.game.currentRoom.addInventory(item);
  }
  showInventory() {
    console.log("You currently have " + this.inventory);
  }
}

//Setting up game functions
async function startGame() {
  console.log("WELCOME TO JORKINGTON"); //title
  console.log("We're going to take you on an advanture. \nLet's get started ... ")
  let userName = await ask("Hi! Jorking buddy, what's your name? \n>");
  global.game = new GameState(userName);
  play(global.game.currentRoom);
}

//Setting up Current Room function
async function play(currentRoom) {
  if (currentRoom.roomName === roomNames.room1) {
    console.log("You're in "+ this.roomNames);
  } else {
    console.log("Not a room");
  }
}



