const mongoose = require('mongoose');
const crypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required: true
        min : [3, 'should be more than 3 characters']
    },
    lastName: {
        type : String,
        required: true
    },
    email: {
        type : String,
        required: true
    },
    password: {
        type : String,
        required: true
    }
}, {
        timestamps: true
    });

let user = mongoose.model('userSch', userSchema);
// function userModel(){
// }
// userModel.prototype.register = (body , callback) => {
//  let user = {
//  }
// }
// module.exports = 
class userModel {
    register =  (body, callback) => {
        const userReg = new user({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password
        })
        const userSave = userReg.save((err, result) => {
            if(err){
              callback(err);
            }else{
                callback(null , result)
            }
        })
        return userSave;
    }
}

module.exports = new userModel();