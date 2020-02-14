/**
 *    Week 2 BCA Project:
 *    Zorkington - a text based adventure game 
 *    Developed by: Jay Subedi, Jon Russel
 *    Date: 2/14/2020
 */

// readline code
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
// end readline code