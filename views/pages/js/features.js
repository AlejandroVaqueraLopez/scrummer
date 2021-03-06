//these are the mechanicals of the entire web proyect ui
//features toggle (home page block number 3)
//buttons
let stBtnFeat = document.getElementById('btnFeat-1');
let ndBtnFeat = document.getElementById('btnFeat-2');
let rdBtnFeat = document.getElementById('btnFeat-3');
//plattforms
let stFeatPlat = document.getElementById('stFeatPlat');
let ndFeatPlat = document.getElementById('ndFeatPlat');
let rdFeatPlat = document.getElementById('rdFeatPlat');
//booleans
let stBtnFeatToggle = false;
let ndBtnFeatToggle = false;
let rdBtnFeatToggle = false;


stBtnFeat.addEventListener("click",() => {
	stBtnFeatToggle = !stBtnFeatToggle;
	if(stBtnFeatToggle == true){
		stBtnFeat.style.transform = 'rotate(180deg)';
		stFeatPlat.style.height = 'auto';
		stFeatParagraph.style.visibility = "visible";
	}else{
		stFeatParagraph.style.visibility = "hidden";
		stBtnFeat.style.transform = 'rotate(-45deg)';
		stFeatPlat.style.height = '140px';
	}
});

ndBtnFeat.addEventListener("click",() => {
	ndBtnFeatToggle = !ndBtnFeatToggle;
	if(ndBtnFeatToggle == true){
		ndBtnFeat.style.transform = 'rotate(180deg)';
		ndFeatPlat.style.height = 'auto';
		ndFeatParagraph.style.visibility = "visible";
	}else{
		ndFeatPlat.style.transition = "all 1s";
		ndFeatParagraph.style.visibility = "hidden";
		ndBtnFeat.style.transform = 'rotate(-45deg)';
		ndFeatPlat.style.height = '140px';
	}

});

rdBtnFeat.addEventListener("click",() => {
	rdBtnFeatToggle = !rdBtnFeatToggle;
	if(rdBtnFeatToggle == true){
		rdBtnFeat.style.transform = 'rotate(180deg)';
		rdFeatPlat.style.height = 'auto';
		rdFeatParagraph.style.visibility = "visible";
	}else{
	  rdFeatPlat.style.transition = "all 1s";
		rdFeatParagraph.style.visibility = "hidden";
		rdBtnFeat.style.transform = 'rotate(-45deg)';
		rdFeatPlat.style.height = '140px';
	}
});

