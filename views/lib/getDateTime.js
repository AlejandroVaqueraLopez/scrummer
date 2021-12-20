const getDateTime = {
}

getTime.getDateTime(){
	var strDateTime = [[AddZero(now.getDate()), 
					AddZero(now.getMonth() + 1), 
					now.getFullYear()].join("/"), 
					[AddZero(now.getHours()), 
					AddZero(now.getMinutes())].join(":"), 
		now.getHours() >= 12 ? "PM" : "AM"].join(" ");
	return strDateTime;
}

module.exports = getDateTime;
