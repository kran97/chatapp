const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const saltRounds = 6;

const userSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required: true,
        minlength : 3
    },
    lastName: {
        type : String,
        required: true,
        minlength : 3
    },
    email: {
        type : String,
        required: true,
        trim : true,
        unique : true
    },
    password: {
        type : String,
        required: true,
        minlength : 6
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
            password: bcrypt.hashSync(body.password, saltRounds)
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

    login = (body, callback) => {
        user.findOne({email: body.email}, (err, res) => {
            if(!res)
            {
                callback("email error");
            }
            else
            {   
                if(bcrypt.compareSync(body.password, res.password))
                {
                    callback(null, res);
                }
                else
                {
                    callback("password error");
                }
            }
        })
    }

    forgot = (body, callback) => {
        user.findOne({email: body.email}, (err, res) => {
            if(!res)
            {
                callback("Email doesn't exist");
            }
            else{
                var transporter = nodemailer.createTransport({
                    service : "Gmail",
                    auth: {
                        user: 'chatappowner@gmail.com',
                        pass: 'admin123admin'
                    }
                });
                var mailOptions = {
                    from: 'chatApp <chatappowner@gmail.com>',
                    to: res.email,
                    subject: 'Reset password',
                    text: 'Link to be put here'
                };
                transporter.sendMail(mailOptions, function(err, res){
                    if(err)
                    {
                        callback(err);
                    }
                    else
                    {
                        console.log('Email sent');
                        callback(null, res);
                    }
                });
                    callback(null, res);
            }
        })
    }
}

module.exports = new userModel();