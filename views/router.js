const {Router} = require('express');
const pool = require('./database.js');
const router = Router();

//RENDER SECTION 
//use res.render to load up an ejs view file
//index page
router.get('/',(req,res)=>{
 res.render(__dirname + '/pages/index.ejs')
});

//signUp page
router.get('/signUp',(req,res)=>{
 res.render(__dirname + '/pages/signUp.ejs')
});

//proyects page
router.get('/proyectPanel',(req,res)=>{
 res.render(__dirname + '/pages/proyectPanel.ejs')
});

//signIn page
router.get('/signIn',(req,res)=>{
 res.render(__dirname + '/pages/signIn.ejs')
});

//profile page
router.get('/profile',(req,res)=>{
 res.render(__dirname + '/pages/profile.ejs')
});

//howToScrum page
router.get('/howToScrum',(req,res)=>{
 res.render(__dirname + '/pages/howToScrum.ejs')
});

//contact page
router.get('/contact',(req,res)=>{
 res.render(__dirname + '/pages/contact.ejs')
});

//proyect content page
router.get('/proyectContent',(req,res)=>{
 res.render(__dirname + '/pages/proyectContent.ejs')
});

//POST SECTION 
router.post('/signUp',(req,res) => {
	res.send('received');
})
module.exports = router;

