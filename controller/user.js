const {createToken,hashcompare,hashedPassword} = require("../controller/jwt.middleware")


//const user = require("../Models/user");
let userRepository = require("../Repository/user");
const user1 = require('../Models/user');

// create login token:

exports. login = async (req, res) => {
	try {
		const user = await userRepository.user1.findOne({email:req.body.email})
		console.log(user);
		if(user)
	if (await hashcompare (req.body.password,user.password)){
		let token = await createToken({
          
		     name,
	         email,
	        password,
			
		})

		res.status(200).send({
			message:"user login successfull!",
			token
		})
	} 
	else
	{
		res.status(402).send({ message:" invalid credentials"})
	}
	else
	{
	res.status(400).send({message:"user does not exists!"})	
	}

} 
catch (err) {
	res.status(500).send({ message:"Internal Server Error"});
}
}

//create user

exports.create = async (req, res) => {
	try {
		await userRepository.adduser(req.body);
		res.status(200).send("data added Successfully");
	} catch (err) {
		res.status(500).send(err);
	}
}

//find all user:

exports.find = async (req, res) => {
	try {
		let user = userRepository.finduser();
		console.log(user);
		  return res.status(200).send(await user);
	}
	catch (err) {
		res.status(400).send(err);
	}
};

//update by user:

exports.update = async (req, res) => {
	try {
		const id=req.params.id;
		
		 userRepository.updateuser({ _id: id},req.body);

		return res.status(200).send("updated successfully");
	} catch (err) {
		res.status(400).send(err);
	}
};

//delete user:

exports.delete = async (req, res) => {
	try {
		let user = userRepository.deleteuser(req.params.id);
		return res.status(200).send("Deleted Successfully");
	} catch (err) {
		res.status(500).send(err);
	}
};

//edit user:

exports.patch = async (req, res) => {
	try {
		const id = req.params.id;
		userRepository.edituser({ _id: id }, req.body);
		return res.status(200).send("Updated Successfully");
	} catch (err) {
		res.status(500).send(err);
	}
};
