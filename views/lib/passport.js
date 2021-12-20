const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const crypData = require('../lib/crypData');
const date = new Date();
const getDate = require('./getDateTime');


passport.use('local.signUp',new LocalStrategy({
	passReqToCallback: true//pass all the req.body object
}, async (req, done) => {//with this you can access to all post data
	//here you define all the middlewares that you want to do with post data
	const {username,email,password,passwordConfirm} = req.body;//destructuring to the req.body
	//create the new object
	const newUser = {
		username: username,
		email: email,
		password: password,
		profileImg: 'defaul.png',
		ID_AUTOGEN: 'defaultIdAutoGen',
		registerDate: getDate.getDateTime()
	}
	//we encrypt the password to save it
	newUser.password = await crypData.encryptPassword(newUser.password);
	//make a pool to the db 
	//const result = await pool.query('INSERT INTO user SET ?',[newUser]);
	

//	console.log(result);
	console.log(newUser);
	req.flash('successSignUp','Sign up successfully!')
}));

//password.serializeUser((user,done) => {
	
//})
