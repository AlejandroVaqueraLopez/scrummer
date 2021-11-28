import express from "express";//express module from the installed node module
import {Server as WebSocketServer} from "socket.io";//socket.io server from the installed node module
import http from "http";//import of the http module directly from node

const path = require('path');

const app = express();//instance of express module
const server = http.createServer(app); //creating a node-http server and passing the express config in "app"
const io = new WebSocketServer(server); //creating the socket.io server with the http server with "app" config

//set the view ejs engine
app.set('view engine', 'ejs');

//use res.render to load up an ejs view file

//index page
app.get('/',(req,res)=>{
 res.render(__dirname + '/pages/index.ejs')
});

//singUp page
app.get('/singUp',(req,res)=>{
 res.render(__dirname + '/pages/singUp.ejs')
});

//proyects page
app.get('/proyectPanel',(req,res)=>{
 res.render(__dirname + '/pages/proyectPanel.ejs')
});

//singIn page
app.get('/singIn',(req,res)=>{
 res.render(__dirname + '/pages/singIn.ejs')
});

//profile page
app.get('/profile',(req,res)=>{
 res.render(__dirname + '/pages/profile.ejs')
});

//howToScrum page
app.get('/howToScrum',(req,res)=>{
 res.render(__dirname + '/pages/howToScrum.ejs')
});

//this is a method that we use to say to ejs that we need to use all the style folders inside page directory
app.use(express.static(__dirname + '/pages'));

io.on('connection',(socket) =>{
	console.log('a new connection heard',socket.id);
	socket.emit('ping');

	socket.on('pong', () => {
		console.log('pong');
	})
});

server.listen(3000);
console.log('server on port',3000);
	
