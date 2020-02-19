/* In the first project story, the response for typing "gargle" is not correctly in place
*/

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

//Setting up room object properties

let roomNames = {
  room1: "182 Zork Street",
  room2: "Foyer",
  room3: "Classroom",
  room4: "Corner of Zork Street and Zorkooski Avenue",
  room5: "North Zorkooski Avenue",
  room6: "City Market",
  room7: "West Zork Street",
  room8: "Kountry Zork Deli",
  room9: "South Zorkooski Avenue",
  room10: "Zorkplain Farms"
};

let roomDescriptions = {
  room1:
    "You are in front of 182 Zork Street, Zorkington, Zorkmont. You are in the center of town. Zork Street runs either direction east and west. The entrance to Zorkington Code Academy is directly to your North. There is a sign in the window",
  room2:
    "You are in the foyer of 182 Zork Street, the classroom of Zorkington Code Academy is farther down to the North. You see your instructor, Bob, sitting fast asleep outside the classroom.",
  room3:
    "You are in a moderately sized classroom with some tables and chairs. A small whiteboard is at the front with some leftover work from yesterdays lesson.",
  room4:
    "You are at the corner where Zork Street intersects Zorkooski Avenue. Zorkington Code Academy is to your West down Zork Street, and you can see Zorkington City Market to your North, and Zorkplain Farms to your south on Zorkooski Ave.",
  room5:
    "Zorkington City Market is directly to your east. It is a relatively large grocery store with a strange mixture of both rich and homeless people going in and out. There is a sign on the front of the building",
  room6:
    "You are inside of Zorkington City Market. It smells weird. Amoung many strange products, you see a large display of tea.",
  room7:
    "You are directly north of Kountry Zork Deli. The delicious smell of bacon and sausage waft out of the kitchen to you. There is a sign in the window",
  room8:
    "You are inside of Kountry Zork Deli, you can see fantastic meats sizziling on the flatop back in the kitchen. An employee is at the counter with Zorkers ready to go.",
  room9:
    "You are in front of Zorkplain Farms, a small gas station and convenience store on South Zorkooski Ave. There is a sign in the window.",
  room10:
    "You are inside of Zorkplain Farms. There are a couple aisles with snacks and drinks and a large beer cooler. You see something shiny amoung the cases of beer."
};

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
  room10: true
};

// setting up Room class & constructor
class Room {
  constructor(name, description, isLocked, north, east, south, west, sign) {
    this.name = name;
    this.description = description;
    this.isLocked = isLocked;
    this.north = north;
    this.east = east;
    this.south = south;
    this.west = west;
    this.sign = sign;
  }
}

//Making all the rooms using the class and constructor
let room1 = new Room(
  roomNames["room1"],
  roomDescriptions["room1"],
  roomIsLocked["room1"],
  "room2",
  "room4",
  null,
  "room7",
  '"Zorkington Code Academy: Learn the Meaning of Life, the Universe, and Everything!"'
);
let room2 = new Room(
  roomNames["room2"],
  roomDescriptions["room2"],
  roomIsLocked["room2"],
  "room3",
  null,
  "room1",
  null,
  "There's no sign here!"
);
let room3 = new Room(
  roomNames["room3"],
  roomDescriptions["room3"],
  roomIsLocked["room3"],
  null,
  null,
  "room2",
  null,
  "There's no sign here!"
);
let room4 = new Room(
  roomNames["room4"],
  roomDescriptions["room4"],
  roomIsLocked["room4"],
  "room5",
  null,
  "room9",
  "room1",
  "There's no sign here!"
);
let room5 = new Room(
  roomNames["room5"],
  roomDescriptions["room5"],
  roomIsLocked["room5"],
  null,
  "room6",
  "room4",
  null,
  '  "Zorkington City Market: Your Community Store for all you Fair Trade and Certified Organic needs!"'
);
let room6 = new Room(
  roomNames["room6"],
  roomDescriptions["room6"],
  roomIsLocked["room6"],
  null,
  null,
  null,
  "room5",
  "There's no sign here!"
);
let room7 = new Room(
  roomNames["room7"],
  roomDescriptions["room7"],
  roomIsLocked["room7"],
  null,
  "room1",
  "room8",
  null,
  '"Kountry Zork: Home of the Zorker"'
);
let room8 = new Room(
  roomNames["room8"],
  roomDescriptions["room8"],
  roomIsLocked["room8"],
  "room7",
  null,
  null,
  null,
  "There's no sign here!"
);
let room9 = new Room(
  roomNames["room9"],
  roomDescriptions["room9"],
  roomIsLocked["room9"],
  "room4",
  "room10",
  null,
  null,
  "Zorkplain Farms: All Zork Trail on sale!"
);
let room10 = new Room(
  roomNames["room10"],
  roomDescriptions["room10"],
  roomIsLocked["room10"],
  null,
  null,
  null,
  "room9",
  "There's no sign here!"
);

let roomLookup = {
  room1: room1,
  room2: room2,
  room3: room3,
  room4: room4,
  room5: room5,
  room6: room6,
  room7: room7,
  room8: room8,
  room9: room9,
  room10: room10
};

// It appears that this code appears above, and since you've already commited, it's okay to remove for the sake of readability

//We're not cool enough to have a Item Class yet!
//
//
//
// class Item {
//   constructor(name, desc, takeable) {
//     (this.name = name), (this.description = desc), (this.takeable = takeable);
//   }
// }
//
// let roomInventory = {
//   room1: [],
//   room2: ["Bob", "Tea Station", "Inferior Tea"],
//   room3: ["chair"],
//   room4: null,
//   room5: [],
//   room6: [
//     "Fair Trade Certified Organic Zork Breakfast Tea",
//     "Fair Trade Certified Organic  Tea",
//     "Unfair Trade British Tea",
//     'Slave Labor Certified "Food" Grade Leaf Product'
//   ],
//   room7: [],
//   room8: [
//     "Large Two Meat Zorker with Bacon and Sausage",
//     "Small Two Meat Zorker with Bacon and Sausage",
//     "Large One Meat Zorker with Bacon",
//     "Large One Meat Zorker with Squirrel"
//   ],
//   room9: [],
//   room10: ["Bob's Keys", "Zork Trail Brewing Company Zork Hopper IPA"]
// };

//All of Bob's dialog

let bobResponses = [
  '"*snore* I... need... Fair Trade Certified Organic Zork Breakfast Tea... *snore*"',
  '"This... sucks..."',
  'Even with his eyes closed, Bob instictively grasps the cup of tea and lifts it to his mouth. The moment the tea touches his lips his eyes burst open, and he looks around himself wildly confused for a moment. "Oh man, what a night I had last night! I must have lost my keys, but I can’t remember where. If only I had a Large Two Meat Zorker with Bacon and Sausage, then I could remember!"',
  '"Oh man, what a night I had last night! I must have lost my keys, but I can’t remember where. If only I had a Large Two Meat Zorker with Bacon and Sausage, then I could remember!"',
  '"Wow, thanks! I love tea."',
  '"Mmmm this is a good sandwich. I can feel the bacon and sausage repairing the synapses in my brain. Oh, now I remember! The last time I had my keys was when I was buying Zork Trail Brewing Company Zork Hopper IPA at Zorkplain Farms last night. Maybe my keys are still there?"',
  '"The last time I had my keys was when I was buying Zork Trail Brewing Company Zork Hopper IPA at Zorkplain Farms last night. Maybe my keys are still there?"',
  '"Wow, thanks! I love Zorkers!"',
  '"You found my keys! Wow, thanks for all the help. I never could have done this on my own. Please have a seat in the classroom, I\'ll tell you the Meaning of Life, the Universe, and Everything!"',
  '"Please have a seat in the classroom."'
];

//Game function

async function startGame() {
  console.log("WELCOME TO ZORKINGTON"); //title
  let userName = await ask("What is your name? \n>_");
  console.log(
    "Greetings, " +
    userName +
    "! You are about to embark on a great adventure.\nIt begins early on a seemingly normal monday morning.\nYou are a new student of Zorkington Code academy, and this is your first day.\nYou arrive early for class and are about to walk inside.\nBut not everything is as ordinary as it seems...\n"
  );
  let player = {
    name: userName,
    inventory: {
      tea: [],
      zorker: [],
      keys: []
    }
  };
  let currentRoom = room1;
  let response = "";
  let bobAsleep = true;
  let bobForget = true;
  let bobNoKeys = true;
  let nextRoom = null;

  console.log(currentRoom.name);
  console.log(currentRoom.description);

  //Main game function is within this while loop

  while (response != "exit") {
    //Gives room description only after you've changed rooms

    if (nextRoom != undefined && nextRoom != null && currentRoom === nextRoom) {
      console.log(currentRoom.name);
      console.log(currentRoom.description);
    }

    //Cursor and user input

    nextRoom = null;
    console.log("");
    response = await ask(">_");
    response = response.toLowerCase();

    //Movement commands and actions

    if (response.includes("go north")) {
      nextRoom = roomLookup[currentRoom.north];
    }
    if (response.includes("go east")) {
      nextRoom = roomLookup[currentRoom.east];
    }
    if (response.includes("go south")) {
      nextRoom = roomLookup[currentRoom.south];
    }
    if (response.includes("go west")) {
      nextRoom = roomLookup[currentRoom.west];
    }

    if (response.includes("go inside")) {
      if (
        currentRoom === room1 ||
        currentRoom === room5 ||
        currentRoom === room7 ||
        currentRoom === room9
      ) {
        if (currentRoom === room1) {
          nextRoom = room2;
        }
        if (currentRoom === room5) {
          nextRoom = room6;
        }
        if (currentRoom === room7) {
          nextRoom = room8;
        }
        if (currentRoom === room9) {
          nextRoom = room10;
        }
      } else {
        console.log("You cannot go inside here!");
      }
    }

    if (nextRoom != undefined && nextRoom != null) {
      if (nextRoom.isLocked === true) {
        console.log("The door is locked.");
      }
      if (nextRoom.isLocked === false) {
        currentRoom = nextRoom;
      }
    }
    if (nextRoom === undefined) {
      console.log("You can't go that way!");
    }

    //Looking around

    if (
      response.includes("look around") ||
      response.includes("where am i") ||
      response.includes("examine surroundings") ||
      response.includes("look at surroundings")
    ) {
      console.log(currentRoom.name);
      console.log(currentRoom.description);
    }

    //Reading signs

    if (
      response.includes("read sign") ||
      response.includes("read the sign") ||
      response.includes("look at sign") ||
      response.includes("look at the sign") ||
      response.includes("examine sign") ||
      response.includes("examine the sign")
    ) {
      console.log(currentRoom.sign);
    }

    //Talking to bob

    if (response.includes("talk to bob") || response.includes("wake up bob") || response.includes("intereact bob") || response.includes("intereact with bob")) {
      if (currentRoom != room2) {
        console.log("Bob isn't here!");
      } else {
        if (bobAsleep === true) {
          room6.isLocked = false;
          console.log(bobResponses[0]);
        } else {
          if (bobForget === true){
            console.log(bobResponses[3])
          } else {
            if (bobNoKeys === true) {
              console.log(bobResponses[6])
            }
            else {
              console.log(bobResponses[9])
            }
          }
        }
      }
    }

    //Tea actions

    if (response.includes("buy tea") || response.includes("take tea")) {
      if (currentRoom === room6) {
        player.inventory.tea.push("tea");
        console.log("You bought some tea");
      } else {
        console.log("There is no tea here!");
      }
    }
    if (response.includes("give bob tea")) {
      if (currentRoom != room2) {
        console.log("Bob isn't here!");
      } else {
        if (player.inventory.tea.includes("tea")) {
          if (bobAsleep === true) {
            player.inventory.tea.pop();
            bobAsleep = false;
            console.log(bobResponses[2]);
            room8.isLocked = false;
            room2.description = "You are in the foyer of 182 Zork Street, the classroom of Zorkington Code Academy is farther down to the North. Your instructor, Bob, is standing groggily outside the classroom."
          } else {
            player.inventory.tea.pop();
            console.log(bobResponses[4]);
          }
        } else {
          console.log("You don't have any tea!");
        }
      }
    }

    //Zorker Actions

    if (response.includes("buy zorker") || response.includes("take zorker")) {
      if (currentRoom === room8) {
        player.inventory.zorker.push("zorker");
        console.log("You bought a Zorker");
      } else {
        console.log("There is no Zorker here!");
      }
    }
    if (response.includes("give bob zorker")) {
      if (currentRoom != room2) {
        console.log("Bob isn't here!");
      } else {
        if (player.inventory.zorker.includes("zorker")) {
          if (bobForget === true) {
            player.inventory.zorker.pop();
            bobForget = false;
            console.log(bobResponses[5]);
            room10.isLocked = false;
          } else {
            player.inventory.zorker.pop();
            console.log(bobResponses[7]);
          }
        } else {
          console.log("You don't have a Zorker!");
        }
      }
    }

    //Bob's Keys Actions

    if (response.includes("search") || response.includes("look")) {
      if (currentRoom === room10) {
        if (bobNoKeys === true) {
          player.inventory.keys.push("keys");
          console.log("Amoung the cases of Zork Trail you find Bob's keys");
        } else {
          console.log("There are no keys here!");
        }
      }
    }
    if (response.includes("give bob keys")) {
      if (currentRoom != room2) {
        console.log("Bob isn't here!");
      } else {
        if (player.inventory.keys.includes("keys")) {
          if (bobNoKeys === true) {
            player.inventory.keys.pop();
            bobNoKeys = false;
            console.log(bobResponses[8]);
            room3.isLocked = false;
          } else {
            player.inventory.keys.pop();
            console.log(bobResponses[8]);
          }
        } else {
          console.log("You don't have any keys!");
        }
      }
    }

    //Sitting in classroom and winning game

    if (response.includes("sit")) {
      if (currentRoom === room3) {
        console.log(
          'Bob comes into the classroom and prepares his notes for the lecture.\nHe clears his throat and proclaims:\n"It\'s 42."'
        );
        console.log("Congragulations, you won!");
        process.exit();
      } else {
        console.log("You don't have time to sit down!");
      }
    }

    // Exit game

    if (response === "exit") {
      process.exit();
    }
  }
}
startGame();
