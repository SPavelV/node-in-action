const net = require("net");
const server = net.createServer((socket) => {
  // socket.on("data", (data) => {
  socket.once("data", (data) => {
    socket.write(data);
  });
});
server.listen(8888);

const EventEmitter = require("events").EventEmitter;
const channel = new EventEmitter();
channel.on("join", () => console.log("Welcome!"));
channel.emit("join");
