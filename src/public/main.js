const socket = io();//this is the main process from the frontend and this io fn is to run a new connection 
socket.on('ping', () => {
	console.log('ping');//all these log's are printed in the frontend, not in server but we can 
	//throw back a response to the server like this
	socket.emit('pong');

})

