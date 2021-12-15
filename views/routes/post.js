const {Router} = require('express');
const router = Router();
const path = require('path');
const passport = require('passport');

//POST SECTION 
router.post('/signUp', passport.authenticate('local.signUp',{
		successRedirect: '/signIn',
		failureRedirect: '/signUp',
		successFlash:true,
		failureFlash: true,
	})
);

module.exports = router;
