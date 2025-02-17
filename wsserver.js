import { createServer } from 'node:http';
import { WebSocketServer } from 'ws';

const server = createServer();
const wss1 = new WebSocketServer({ noServer: true });

wss1.on('connection', function connection(ws) {
  ws.on('error', console.error);
  console.log("wss1 connection");

  // Respond to ping with pong
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(`pong: ${new Date().toISOString()}`);
  });
});

wss1.on('upgrade', function upgrade(request, socket, head) {
  console.log('upgrade');
});

server.on('upgrade', function upgrade(request, socket, head) {
  console.log("server upgrade");
  wss1.handleUpgrade(request, socket, head, function done(ws) {
    wss1.emit('connection', ws, request);
  })
});

console.warn("ws server open");

server.listen(8075);