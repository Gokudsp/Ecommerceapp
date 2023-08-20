

//const user = require("../Models/user");

const productRepository = require("../Repository/product");

const multer  = require('multer')

const upload = multer({ dest: 'uploads/'})


//create user

exports.create = async (req, res) => {
	try {
		await productRepository.adduser(req.body);
		res.status(200).send("data added Successfully");
	} catch (err) {
		res.status(500).send(err);
	}
}

//find all user:

exports.find = async (req, res) => {
	try {
		let product = productRepository.finduser();
		console.log(product);
		  return res.status(200).send(await product);
	}
	catch (err) {
		res.status(400).send(err);
	}
};

//update by user:

exports.update = async (req, res) => {
	try {
		const id=req.params.id;
		
		productRepository.updateuser({ _id: id},req.body);

		return res.status(200).send("updated successfully");
	} catch (err) {
		res.status(400).send(err);
	}
};

//delete user:

exports.delete = async (req, res) => {
	try {
		let user = productRepository.deleteuser(req.params.id);
		return res.status(200).send("Deleted Successfully");
	} catch (err) {
		res.status(500).send(err);
	}
};

//edit user:

exports.patch = async (req, res) => {
	try {
		const id = req.params.id;
		productRepository.edituser({ _id: id }, req.body);
		return res.status(200).send("Updated Successfully");
	} catch (err) {
		res.status(500).send(err);
	}
};
