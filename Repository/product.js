

const products = require('../Models/product');



//post prodect token:

exports.addtoken = async (data) => {
	try {
		const user = new products(data);
		await user.findtoken({ email: req.body.email});
	} catch (err) {
		throw err;
	}
};
//Add users :

exports.adduser = async (data) => {
	try {
		const user = new products(data);
		await user.save();
	} catch (err) {
		throw err;
	}
};

//finduser:
 
exports.finduser = async() => {
	try{
		let data = await products.find();
		return data;
	}
	catch(err){
		throw err;
	}
};

//update user:

exports.updateuser = async (quary,data) => {
	try {
		return products.findByIdAndUpdate (quary,data,{new:true});
		 
	} 
	catch (err) {
		throw err;
	}
};

//delete user:

exports.deleteuser=async(id)=>{
	try{
		return products.findOneAndDelete({_id: id});
	}
	catch(err){
		throw err;
	}
};
 
//edit user:

exports.edituser = async (quary,data) => {
	try {
		return products.findByIdAndUpdate(quary,data,{new:true});
		 
	} 
	catch (err) {
		throw err;
	}
};


