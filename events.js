const EventEmitter = require("events");

const celebrity = new EventEmitter();

celebrity.on("race Win", () => {
  console.log("Congratulations! You are the best!");
});

celebrity.on("race Win", () => {
  console.log("Boo Try again!");
});

celebrity.emit("race Win");
