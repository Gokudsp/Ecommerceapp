const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const { Model } = require('mongoose');
const saltRounds = 10;

const hashPassword = async(password)=>{
    let salt = await bcrypt.genSalt(saltRounds)
    let hashedPassword = await bcrypt.hash(password,salt)
    return hashedPassword
}

const hashcompare = async (password,hashedPassword) =>{
    return await bcrypt.compare(password,hashedPassword)
}

const createToken = async (payload)=>{
    let token = await jwt.sign(payload,secretkey,{expiresIn:'2m'})
    return token

}
 

Model.exports={createToken,hashcompare,hashPassword}


// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');












//exports.decodeToken = async (token) => {
    //     var data = await jwt.verify(token, global.SALT_KEY);
    //     return data;
    
    // }

//  exports.verifyToken = async (token) => {
//     try { 
//         console.log(token);
//         let splitedToken = token.split(" ")[1]
//         console.log(splitedToken);
//            const decryptToken = jwt.verify((token),secretkey);
//             return decryptToken
//     }
//    catch(error){
//        throw error
//    }
//     }
   

