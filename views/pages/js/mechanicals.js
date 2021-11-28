//benefits block toggle if you donate to scrummer 
let btnQuestionMark = document.getElementById('btnQuestionMark');
let btnCloseQuestion = document.getElementById('btnCloseInfo');
let questionInfo = document.getElementById('questionInfo');
let darkPanel = document.getElementById('darkPanel');

btnQuestionMark.addEventListener('click',()=>{
	questionInfo.style.top="0";
	darkPanel.style.top="0";
});

btnCloseQuestion.addEventListener('click',()=>{
	questionInfo.style.top="-100vh";
	darkPanel.style.top="-100vh";
});

//menu toggle functionality
let menuPanel = document.getElementById('menuPanel');
let btnCloseMenu = document.getElementById('btnCloseMenu');
let btnOpenMenu = document.getElementById('btnOpenMenu');

btnCloseMenu.addEventListener('click',()=>{
	menuPanel.style.top="-100vh";
});


btnOpenMenu.addEventListener('click',()=>{
	menuPanel.style.top = "0";
});


