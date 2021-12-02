const {Router} = require('express');
const router = Router();
//use res.render to load up an ejs view file
//index page
router.get('/',(req,res)=>{
 res.render(__dirname + '/pages/index.ejs')
});

//singUp page
router.get('/singUp',(req,res)=>{
 res.render(__dirname + '/pages/singUp.ejs')
});

//proyects page
router.get('/proyectPanel',(req,res)=>{
 res.render(__dirname + '/pages/proyectPanel.ejs')
});

//singIn page
router.get('/singIn',(req,res)=>{
 res.render(__dirname + '/pages/singIn.ejs')
});

//profile page
router.get('/profile',(req,res)=>{
 res.render(__dirname + '/pages/profile.ejs')
});

//howToScrum page
router.get('/howToScrum',(req,res)=>{
 res.render(__dirname + '/pages/howToScrum.ejs')
});

module.exports = router;

