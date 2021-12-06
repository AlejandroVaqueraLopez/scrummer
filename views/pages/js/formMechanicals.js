
let form= document.getElementById('form');
let btnSave= document.getElementById('btnSave');
let btnOpenForm = document.getElementById('btnOpenForm');
let btnCloseForm = document.getElementById('btnCloseForm');

btnOpenForm.addEventListener('click', ()=>{
	form.style.top = '0';
});
btnSave.addEventListener('click', ()=>{
	//in here we need the backend
	//form.style.top = '-100vh';
});
btnCloseForm.addEventListener('click', ()=>{
	form.style.top = '-100vh';
});



