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
	req.flash('success','new user confirmed');
	res.redirect('/signUp');
});

module.exports = router;
