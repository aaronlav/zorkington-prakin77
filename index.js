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
// class Gamestate {
//   constructor(userName) {
//     this.currentRoom = roomName.room1;
//     this.user = new Player(userName);
//   }

//   moveToRoom(nextRoom) {
//     this.currentRoom = rooms[nextRoom];
//   }

//   printState() {
//     console.log(this);
//   }
// }

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
  console.log("We're going to take you on an advanture \n that you have never had before. \nLet's get started ... ")
  let userName = await ask("Hi! Jorking buddy, what's your name? \n>_");
  // global.game = new GameState(userName);
  play(currentRoom);
}

//Setting up Current Room function
async function play(currentRoom) {
  if (currentRoom.roomName === roomNames.room1) {
    console.log("You're in "+ this.roomNames);
  } else {
    console.log("Not a room");
  }
}

const player = {
  name: null,
  inventory: null,
  currentRoom: null,
}

// let rooms = 
// [room1,
// room2,
// room3,
// room4,
// room5,
// room6,
// room7,
// room8,
// room9,
// room10]


let roomNames = {
  room1: '182 Zork Street',
  room2:  "Foyer",
  room3: "Classroom",
  room4: "Corner of Zork Street and Zorkooski Avenue",
  room5: "North Zorkooski Avenue",
  room6: "City Market",
  room7: "West Zork Street",
  room8: "Kountry Zork Deli",
  room9: "South Zorkooski Avenue",
  room10: "Zorkplain Farms",
}

let roomDescriptions = {
  room1: 'You are in front of 182 Zork Street, Zorkington, Zorkmont. You are in the center of town. Zork Street runs either direction east and west. The entrance to Zorkington Code Academy is directly to your North. There is a sign in the window',
  room2: 'You are in the foyer of 182 Zork Street, the classroom of Zorkington Code Academy is farther down to the North. You see your instructor, Bob, sitting fast asleep outside the classroom.',
  room3: 'You are in a moderately sized classroom with some tables and chairs. A small whiteboard is at the front with some leftover work from yesterdays lesson.',
  room4: 'You are at the corner where Zork Street intersects Zorkooski Avenue. Zorkington Code Academy is to your West down Zork Street, and you can see Zorkington City Market to your North, and Zorkplain Farms to your south on Zorkooski Ave.',
  room5: 'You are in front of Zorkington City Market on North Zorkooski Ave. It is a relatively large grocery store with a strange mixture of both rich and homeless people going in and out. There is a sign on the front of the building',
  room6: 'You are inside of Zorkington City Market. It smells weird. Amoung many strange products, you see a large display on one side of the store with many different kinds of tea.',
  room7: 'You are west of Zorkington Code Academy on Zork Street, Kountry Zork Deli lies to your South. The delicious smell of bacon and sausage waft out of the kitchen to you. There is a sign in the window',
  room8: 'You are inside of Kountry Zork Deli, you see a peak of some fantastic meats sizziling on the flatop in the kitchen in the back. An employee is at the counter in front of you.',
  room9: 'You are in front of Zorkplain Farms, a small gas station and convenience store on South Zorkooski Ave. There is a sign in the window.',
  room10: 'You are inside of Zorkplain Farms. There are a couple aisles with snacks and drinks and a large beer cooler.',
}

let roomIsLocked = {
  room1: false,
  room2: false,
  room3: true,
  room4: false,
  room5: false,
  room6: true,
  room7: false,
  room8: true,
  room9: false,
  room10: true,
}

// let signText = {
//   sign1: 'Zorkington Code Academy: Learn the Meaning of Life, the Universe, and Everything!',
//   sign2: 'Zorkington City Market: Your Community Store for all you Fair Trade and Certified Organic needs!',
//   sign3: 'Kountry Zork: Home of the Zorker',
//   sign4: 'Zorkplain Farms: All Zork Trail products on sale',

// }

let sign1 = 'Zorkington Code Academy: Learn the Meaning of Life, the Universe, and Everything!'

let sign2 = 'Zorkington City Market: Your Community Store for all you Fair Trade and Certified Organic needs!'

let sign3 = 'Kountry Zork: Home of the Zorker'


let sign4 = 'Zorkplain Farms: All Zork Trail products on sale!'


let roomInventory = {
  room1: [sign1],
  room2: ['Bob','Tea Station','Inferior Tea'],
  room3: ['chair'],
  room4: null,
  room5:[sign2],
  room6: ["Fair Trade Certified Organic Zork Breakfast Tea", "Fair Trade Certified Organic  Tea", 'Unfair Trade British Tea', 'Slave Labor Certified "Food" Grade Leaf Product'],
  room7:[sign3],
  room8: [ 'Large Two Meat Zorker with Bacon and Sausage', 'Small Two Meat Zorker with Bacon and Sausage', 'Large One Meat Zorker with Bacon', 'Large One Meat Zorker with Sausage'],
  room9:[sign4],
  room10: ["Bob's Keys", 'Zork Trail Brewing Company Zork Hopper IPA'],
}

// setting up Room classes & constructor
class Room {
  constructor(roomName, description, inventory, isLocked) {
    this.roomName = roomName;
    this.description = description[this.roomDescriptions];
    this.inventory = inventory || [];
    this.isLocked = isLocked;
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

let room1 = new Room(roomNames['room1'], roomDescriptions['room1'], roomInventory['room1'], roomIsLocked['room1'])
let room2 = new Room(roomNames['room2'], roomDescriptions['room2'], roomInventory['room2'], roomIsLocked['room2'])
let room3 = new Room(roomNames['room3'], roomDescriptions['room3'], roomInventory['room3'], roomIsLocked['room3'])
let room4 = new Room(roomNames['room4'], roomDescriptions['room4'], roomInventory['room4'], roomIsLocked['room4'])
let room5 = new Room(roomNames['room5'], roomDescriptions['room5'], roomInventory['room5'], roomIsLocked['room5'])
let room6 = new Room(roomNames['room6'], roomDescriptions['room6'], roomInventory['room6'], roomIsLocked['room6'])
let room7 = new Room(roomNames['room7'], roomDescriptions['room7'], roomInventory['room7'], roomIsLocked['room7'])
let room8 = new Room(roomNames['room8'], roomDescriptions['room8'], roomInventory['room8'], roomIsLocked['room8'])
let room9 = new Room(roomNames['room9'], roomDescriptions['room9'], roomInventory['room9'], roomIsLocked['room9'])
let room10 = new Room(roomNames['room10'], roomDescriptions['room10'], roomInventory['room10'], roomIsLocked['room10'])

startGame()
currentRoom()