import express from "express";//express module from the installed node module
import {Server as WebSocketServer} from "socket.io";//socket.io server from the installed node module
import http from "http";//import of the http module directly from node

const app = express();//instance of express module
const server = http.createServer(app); //creating a node-http server and passing the express config in "app"
const io = new WebSocketServer(server); //creating the socket.io server with the http server with "app" config

app.use(express.static(__dirname + '/public'));

io.on('connection',(socket) =>{
	console.log('a new connection heard',socket.id);
	socket.emit('ping');

	socket.on('pong', () => {
		console.log('pong');
	})


});



server.listen(3000);
console.log('server on port',3000);
	
