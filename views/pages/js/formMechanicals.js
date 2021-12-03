
let formMenu = document.getElementById('formMenu');
let btnSaveProfile = document.getElementById('btnSaveProfile');
let btnChangeProfile = document.getElementById('btnChangeProfile');
let btnCloseForm = document.getElementById('btnCloseForm');

btnChangeProfile.addEventListener('click', ()=>{
	formMenu.style.top = '0';
});
btnSaveProfile.addEventListener('click', ()=>{
	//in here we need the backend
	formMenu.style.top = '-100vh';
});
btnCloseForm.addEventListener('click', ()=>{
	formMenu.style.top = '-100vh';
});



