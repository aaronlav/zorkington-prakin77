const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

//------------------------------------------------------------------------------------------------------------------------
//Rule sets and templates

//player object
const player = {
  name: null,
  currentRoom: null,
  inventory: [],
  status: [],

  lookAround: () => {
    return this.currentRoom.description
  },

  //move
  changeRoom: (room) => {
    if (!room.isLocked) {
      player.currentRoom = room
    } else {
      console.log(`The ${room.name} is locked...`)
    }
  },

  //pick up
  pickUp: (item) => {
    if (item.takeable === true) {
      player.inventory.push(item);
      player.currentRoom.removeItem(item);
      return `You pick up a ${item.name}`
    } else {
      return "You can't take that"
    }
  },

  //drop item
  dropItem: (itemName) => {
    let item = player.inventory.find((object) => {
      return object.name === itemName
    })
    let dropped = player.inventory.splice(player.inventory.indexOf(item), 1);
    //console.log(dropped)
    player.currentRoom.addItem(dropped[0])
  },
  //make item

  //use items
  useItem: (item) => {
    item.action()
  }
}

//Room template
class Room {
  constructor(name, description, inventory, north, south, east, west) {
    //name and description should be strings, inventory is an array of objects, directions are strings

    this.name = name;
    this.description = description;
    this.inventory = inventory || [];
    this.isLocked = false;
    this.north = north || null;
    this.south = south || null;
    this.east = east || null;
    this.west = west || null;

    this.unlock = () => {
      if (player.inventory.includes(obObjs['key'])) {
        if (this.isLocked === false) {
          return ('The door is already unlocked')
        } else {
          this.isLocked = false;
          return ("The door unlocks with an audible click.")
        }
      } else {
        return "You don't have a key..."
      }
    };

    this.removeItem = (itemName) => {
      let item = this.inventory.find((object) => {
        return object.name === itemName
      })

      this.inventory.splice(this.inventory.indexOf(item), 1);
    };

    this.addItem = (item) => {
      this.inventory.push(item)
    };

    this.examineItem = (item) => {
      return item.description
    };

    this.enterRoom = () => {
      return (this.name + '\n' + this.description)
    }

  }
}

//Items object definition
class InvObj {
  constructor(name, desc, takeable, action) {
    //name and desc should be strings, takeable is a boolean, action should be a function
    this.name = name;
    this.description = desc;
    this.takeable = takeable;
    this.action = action
  }
}

//acceptable commands
const commands = {
  affirmative: ['yes', 'yesh', 'yup', 'y', 'yeah', 'ok', ''],
  move: ['go', 'move', 'head', 'walk', 'run', 'crawl', 'skip', 'enter', 'continue'],
  examine: ['look', 'examine', 'check', 'study', 'inspect'],
  take: ['pick', 'take', 'grab', 'steal', 'buy'],
  use: ['use', 'give', 'eat', 'drink'],
  unlock: ['unlock', 'open'],
  immolate: ['immolate', 'ignite', 'light', 'burn'],
  drop: ['drop', 'remove']
}