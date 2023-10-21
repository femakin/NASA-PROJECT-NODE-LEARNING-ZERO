import { send } from "./request.mjs";
import { read } from "./response.mjs";
// const response = require("./response.mjs");

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = makeRequest("https://google.com", "Hello");

console.log(responseData);
