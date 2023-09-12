"use strict";
const prompt = require("prompt-sync")();

function main() {
  let timer = prompt("Enter a time in seconds: ");
  counterTime(timer);
}

function counterTime(timer) {
  let mycounter = setInterval(function () {
    console.log(timer--);
    if (timer === 0) {
      console.log("BOOM!");
      clearInterval(mycounter);
    }
  }, 1000);

}

main();
