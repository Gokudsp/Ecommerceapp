let mongoose = require("mongoose");
const jwt = require ("./controller/jwt.middleware")
const bcrypt = require('bcrypt');

require('dotenv').config()
mongoose.connect(process.env.DBURL) 

const database =mongoose.connection
database.on('connected',() => console.log('Database Connected'))

let express = require("express");
let app = express();

app.listen(3000, () => {
	console.log("Server running.....");
});

let bodyParser = require("body-parser");
app.use(bodyParser.json());

 const multer  = require('multer')
 const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    console.log(file);
    const uniqueSuffix ="Goku"
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
  })
  const upload = multer({ storage: storage })

 app.post('/profile',upload.single('newfile'),function(req, res) {

	res.status(200).send({
		status:200,
		message:"file upload success"
	})
})
 



const user  =require("./controller/user");
const product =require("./controller/product");


// EcommerceappUser Module :

//Create a API to Create User:

app.post('/signup', user.create);
app.post('/user', user.login);
app.get("/user/find", user.find);
app.put("/user/:id", user.update);
app.delete("/user/:id", user.delete);
app.patch("/user/:id" , user.patch)

//Authentication Module:

// product models:

//app.post ("/profile",profile.create),

app.post("/product", product.create);
app.post("/product", product.createtoken);
app.get("/product/find", product.find);
app.put("/product/:id", product.update);
app.delete("/product/:id", product.delete);
app.patch("/product/:id" , product.patch)


// Wishlist Module:

// Create a API to Login to APP with Token. 
// Create an API to Reset Password.



