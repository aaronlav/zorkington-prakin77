const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

// remember the StateMachine lecture
// https://bootcamp.burlingtoncodeacademy.com/lessons/cs/state-machines

const player = {
  name: null,
  inventory: null,
  currentRoom: null,
}

class Room {
constructor(name, description, inventory, isLocked) {
  this.name = name;
  this.description = description;
  this.inventory = inventory || [];
  this.isLocked = isLocked;
  }
}

let room1 = new Room()

let roomNames = {
  room1: 'In Front of 182 Main'
  room2:  "Foyer of 182 Main"
  room3: "Classroom of 182 Main"
  room4: "Corner of Main and Winooski"
  room5: "North Winooski Ave"
  room6: "Inside City Market"
  room7: "West Main Street"
  room8: "Inside Kountry Kart Deli"
  room9: "South Winooski Ave"
  room10: "Inside Champlain Farms"
}

let roomDescriptions = {
  room1: 'You are standing in front of 182 Main St, Zorkington, Zorkmont. You are in the center of town and are surrounded by multistory buildings. Main Street runs either direction east and west, and Zorkington Code Academy is directly in front of you to the North. It is early in the morning, and there is not much activity. There is a sign in the window',
  room2: 'You are in the foyer of 182 Main St, the classroom of Zorkington Code Academy is farther down to the North. You see your instructor, Bob, sitting fast asleep outside the classroom.'
  room3: 'You are in a moderately sized classroom with some tables and chairs. A small whiteboard is at the front with some leftover work from yesterdays lesson.'
  room4: 'You are at the corner where Main Street intersects Winooski Avenue'
  room5: ''
  room6: ''
  room7: ''
  room8: ''
  room9: ''
  room10: ''
}

let roomInventory = {
  room1: [sign182Main]
  room2:
  room3:
  room4:
  room5:
  room6:
  room7:
  room8:
  room9:
  room10:
}

let roomLocked = {
  room1: false
  room2:
  room3:
  room4:
  room5:
  room6:
  room7:
  room8:
  room9:
  room10:
}