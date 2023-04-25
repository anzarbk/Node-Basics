const EventEmitter = require("events");
const http = require("http");

class sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new sales();

myEmitter.on("newSale", () => {
  console.log("There is a new sale");
});
myEmitter.on("newSale", () => {
  console.log("costumer name: john");
});
myEmitter.on("newSale", (stock) => {
  console.log(`there are ${stock} shoes are left`);
});
myEmitter.emit("newSale", 9);

////////////////////////////////

const server = http.createServer();

server.on("request", () => {
  console.log("request recieved");
  res.end("request recieved");
});
server.on("request", () => {
  console.log("another request recieved");
  res.end("request recieved");
});
server.on("close", () => {
  console.log("server closed");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening...");
});
