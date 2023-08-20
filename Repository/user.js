

const user1 = require('../Models/user');
const { createtoken } = require('../controller/product');
const {hashPassword} = require("../controller/jwt.middleware")


// login user:

exports.loginuser = async () => {
	try{
		const user = new user1({});
		await user.save();
		return re
	 }

	 catch (err) {
		throw err;
	}
};

	
//  catch (err) {
// 		res.status(500).send({ message:"Internal Server Error"});
// 	}
// }



//Add users :

exports.adduser = async (data) => {
	try {
		const user = new user1(data);
		console.log(data);
		let hashedPassword=await hashPassword(data.password);
		 data.password=hashedPassword
		 console.log(hashedPassword)
		await user1.create();
	} catch (err) {
		throw err;
	}
};

//finduser:
 
exports.finduser = async() => {
	try{
		let data = await user1.find({});
		return data;
	}
	catch(err){
		throw err;
	}
};

//update user:

exports.updateuser = async (quary,data) => {
	try {
		return user1.findByIdAndUpdate(quary,data,{new:true});
		 
	} 
	catch (err) {
		throw err;
	}
};

//delete user:

exports.deleteuser=async(id)=>{
	try{
		return user1.findOneAndDelete({_id: id});
	}
	catch(err){
		throw err;
	}
};
 
//edit user:

exports.edituser = async (quary,data) => {
	try {
		return user1.findByIdAndUpdate(quary,data,{new:true});
		 
	} 
	catch (err) {
		throw err;
	}
};