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
  room1: '182 Main',
  room2:  "Foyer",
  room3: "Classroom"
  room4: "Corner of Main and Zorkooski",
  room5: "North Zorkooski Ave",
  room6: "City Market",
  room7: "West Main Street",
  room8: "Kountry Zork Deli",
  room9: "South Zorkooski Ave",
  room10: "Zorkplain Farms",
}

let roomDescriptions = {
  room1: 'You are in front of 182 Main Street, Zorkington, Zorkmont. You are in the center of town. Main Street runs either direction east and west. The entrance to Zorkington Code Academy is directly to your North. There is a sign in the window',
  room2: 'You are in the foyer of 182 Main St, the classroom of Zorkington Code Academy is farther down to the North. You see your instructor, Bob, sitting fast asleep outside the classroom.',
  room3: 'You are in a moderately sized classroom with some tables and chairs. A small whiteboard is at the front with some leftover work from yesterdays lesson.',
  room4: 'You are at the corner where Main Street intersects Zorkooski Avenue. Zorkington Code Academy is to your West down Main Street, and you can see Zorkington City Market to your North, and Zorkplain Farms to your south on Zorkooski Ave.',
  room5: 'You are in front of Zorkington City Market on North Zorkooski Ave. It is a relatively large grocery store with a strange mixture of both rich and homeless people going in and out. There is a sign on the front of the building',
  room6: 'You are inside of Zorkington City Market. It smells weird. Amoung many strange products, you see a large display on one side of the store with many different kinds of tea.',
  room7: 'You are west of Zorkington Code Academy on Main Street, Kountry Zork Deli lies to your South. The delicious smell of bacon and sausage waft out of the kitchen to you. There is a sign in the window',
  room8: 'You are inside of Kountry Zork Deli, you see a peak of some fantastic meats sizziling on the flatop in the kitchen in the back. An employee is at the counter in front of you.',
  room9: 'You are in front of Zorkplain Farms, a small gas station and convenience store on South Zorkooski Ave. There is a sign in the window.',
  room10: 'You are inside of Zorkplain Farms. There are a couple aisles with snacks and drinks and a large beer cooler.',
}

let roomInventory = {
  room1: [sign1],
  room2: ['Bob','Tea Station','Inferior Tea'],
  room3: ['chair'],
  room4: null,
  room5:[sign2],
  room6: ["Fair Trade Certified Organic Irish Breakfast Tea", "Fair Trade Certified Organic Scottish Breakfast Tea", 'Unfair Trade British Tea', 'Slave Labor Certified "Food" Grade Leaf Product'],
  room7:[sign3],
  room8: [ 'Large Two Meat Shiner with Bacon and Sausage', 'Small Two Meat Shiner with Bacon and Sausage', 'Large One Meat Shiner with Bacon', 'Large One Meat Shiner with Sausage'],
  room9:[sign4],
  room10: ["Bob's Keys", 'Long Trail Brewing Company Trail Hopper IPA'],
}

let roomLocked = {
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

let signText = {
  sign1: '',
  sign2: '',
  sign3: '',
  sign4: '',

}