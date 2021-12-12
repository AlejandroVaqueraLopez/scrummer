const {Router} = require('express');
const pool = require('../database');
const router = Router();
const path = require('path');

//POST SECTION 
router.post('/signUp',(req,res) => {
	const {name,email,password,passwordConfirm} = req.body;
	const newUser = {
		name,
		email,
		password,
		passwordConfirm
	};

	console.log(newUser);
	req.flash('success','new user confirmed');
	res.redirect(path.join(__dirname,'../pages/proyectPanel.ejs'));
});

module.exports = router;
