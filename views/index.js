const express = require("express");//express module from the installed node module
import {Server as WebSocketServer} from "socket.io";//socket.io server from the installed node module
const http = require("http");//import of the http module directly from node
const flash = require('connect-flash');
const morgan = require('morgan');
const passport = require('passport');

const session = require('express-session');
const mysqlStore = require('express-mysql-session');
const {database}= require('./keys');

//IMPORTANT NOTE: IF YOU INSTALL A NODE MODULE, YOU NEED TO IMPORT IT AS TRADITIONAL, 'import ....'
//BUT IF YOU HAVE ALREADY IT IN NODE JS JUST TYPE 'const --varName-- = require('moduleName')'
//'
//initializations
const path = require('path');
const app = express();//instance of express module
const server = http.createServer(app); //creating a node-http server and passing the express config in "app"
const io = new WebSocketServer(server); //creating the socket.io server with the http server with "app" config
require('./lib/passport');//this one is to use the passport file functions

//set the view ejs engine
app.set('view engine', 'ejs');
//to use middlewares
app.use(session({
	secret: 'mySession',
	resave: false,
	saveUninitialized: false,
	store:new mysqlStore(database) 
	
}))
app.use(morgan('dev'));//still unused
app.use(flash());
//to encode the url
app.use(express.urlencoded({extended:false}));//still unused
//to use json in the future
app.use(express.json());//still unused
app.use(passport.initialize());//initializing passport module
app.use(passport.session());//creating a session with passport module

//GLOBAL variables
app.use((req,res,next) => {
	app.locals.successSignUp = req.flash('successSignUp');

	next();
})


//with this we can make a module of all our routes of the proyect ROUTES
app.use(require('./routes/router'));
//all the post form methods  
app.use(require('./routes/post'));

//this is a method that we use to say to ejs that we need to use all the style folders inside page directory
app.use(express.static( path.join(__dirname,'pages')));
//socket.io cruds
io.on('connection',(socket) =>{
	console.log('a new connection heard',socket.id);
	socket.emit('ping');

	socket.on('pong', () => {
		console.log('pong');
	})
});

//server starter
server.listen(3000,'192.168.100.242');//the second parameter is a specific ip to prove the app in every device 
console.log('server on port',3000);
	
