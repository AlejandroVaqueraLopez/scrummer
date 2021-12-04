const express = require("express");//express module from the installed node module
import {Server as WebSocketServer} from "socket.io";//socket.io server from the installed node module
const http = require("http");//import of the http module directly from node

//IMPORTANT NOTE: IF YOU INSTALL A NODE MODULE, YOU NEED TO IMPORT IT AS TRADITIONAL, 'import ....'
//BUT IF YOU HAVE ALREADY IT IN NODE JS JUST TYPE 'const --varName-- = require('moduleName')'
//'

const path = require('path');
const app = express();//instance of express module
const server = http.createServer(app); //creating a node-http server and passing the express config in "app"
const io = new WebSocketServer(server); //creating the socket.io server with the http server with "app" config

//set the view ejs engine
app.set('view engine', 'ejs');

//with this we can make a module of all our routes of the proyect
app.use(require('./router'));

//this is a method that we use to say to ejs that we need to use all the style folders inside page directory
app.use(express.static( path.join(__dirname,'pages')));

io.on('connection',(socket) =>{
	console.log('a new connection heard',socket.id);
	socket.emit('ping');

	socket.on('pong', () => {
		console.log('pong');
	})
});

server.listen(3000,'192.168.100.242');//the second parameter is a specific ip to prove the app in every device 
console.log('server on port',3000);
	
