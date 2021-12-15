const bcrypt = require('bcryptjs');
const crypData = {}

//signUp encrypting process
crypData.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);//generating the token 
	const finalPassword = await bcrypt.hash(password, salt);//encrypting the password with the code 
	return finalPassword;
}
//signIn comparing encrypted password 
crypData.matchPassword = async (password,savePassword) => {
	await bcrypt.compare(password, savePassword);
}

module.exports = crypData;
