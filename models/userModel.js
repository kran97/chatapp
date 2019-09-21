const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const config = require('../jwtConfig');
const saltRounds = 6;

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    token: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

const msgSchema = new mongoose.Schema ({
    
    sender: {
        type: String,
        required: true
    },
    senderName: {
        type: String,
        //required: true
    },
    receiver: {
        type: String,
        required: true
    },
    receiverName: {
        type: String,
        //required: true
    },
    msgBody: {
        type: String,
        required: true
    }
}, {
    timestamps:true
});

let user = mongoose.model('userSch', userSchema);
let msg = mongoose.model('msgSch', msgSchema);

class userModel {
    register = ({ firstName, lastName, email, password }, callback) => {
        const userReg = new user({
            firstName,
            lastName,
            email,
            password: bcrypt.hashSync(password, saltRounds)
        })
        userReg.save((err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result);
            }
        })
    }

    login = (body, callback) => {
        user.findOne({ email: body.email }, (err, res) => {
            if (!res) {
                callback("email error");
            }
            else {
                if (bcrypt.compareSync(body.password, res.password)) {
                    let token = jwt.sign({email: body.email},
                        config.secret,
                        {expiresIn: '1h'}
                    );
                    
                    callback(null, res);
                }
                else {
                    callback("password error");
                }
            }
        })
    }

    forgot = (body, callback) => {
        user.findOne({ email: body.email }, (err, res) => {
            if (!res) {
                callback("Email doesn't exist");
            }
            else {
                let tokens = jwt.sign({email : body.email},
                    config.secret,
                    {expiresIn: 60*10}
                );
                user.updateOne({email: body.email}, {token: tokens}, function(err, res){
                    if(err)
                    {
                        callback(err);
                    }
                    else{
                        console.log("updated successfully");
                    }
                });
                var transporter = nodemailer.createTransport({
                    service: "Gmail",
                    auth: {
                        user: 'chatappowner@gmail.com',
                        pass: 'admin123admin'
                    }
                });
                var mailOptions = {
                    from: 'chatApp <chatappowner@gmail.com>',
                    to: res.email,
                    subject: 'Reset password',
                    text: 'Hello, You can reset your password using the link http://localhost:3000/reset/'+tokens+' which will expire in 10 minutes.'
                };
                transporter.sendMail(mailOptions, function (err, res) {
                    if (err) {
                        callback(err);
                    }
                    else {
                        console.log('Email sent');
                        callback(null, res);
                    }
                });
                callback(null, res);
            }
        })
    }

    reset = (body, callback) => {
        let tokens = jwt.sign({email : body.email},
            config.secret,
            {expiresIn: 60*10}
        );
        let decoded = jwt.verify(tokens, config.secret, function(err, decoded) {
            if(err)
            {
                callback(err);
            }
            else
            {
                user.findOne({email: decoded.email}, (err, res) => {
                    if(!res)
                    {
                        callback("Wrong token taken");
                    }
                    else
                    {
                        user.updateOne({email: decoded.email}, {password: bcrypt.hashSync(body.password, saltRounds)}, function(err, res){
                            if(err)
                            {
                                callback(err);
                            }
                            else{
                                //callback(null, res);
                            }
                        });
                    }
                });
                callback(null, decoded.email);
            }
        });
        
    }

    message = (body, callback) => {
        const mess = new msg ({
            sender: body.sender,
            senderName: body.senderName,
            receiver: body.receiver,
            receiverName: body.receiverName,
            msgBody: body.msgBody
        })

        mess.save((err, result) => {
            if(err)
            {
                callback(err);
            } else {
                callback(null, result);
            }
        })

        // user.findOne({email: body.sender}, (err, res)=> {
        //     if(!res)
        //     {
        //         callback(err);
        //     }
        //     else
        //     {
        //         msg.updateOne({sender: body.sender}, {senderName: res.firstName});
        //     }
        // });

        // user.findOne({email: body.receiver}, (err, res)=> {
        //     if(!res)
        //     {
        //         callback(err);
        //     }
        //     else
        //     {
        //         msg.updateOne({receiver: body.receiver}, {receiverName: res.firstName});
        //     }
        // });
        
    }
}

module.exports = new userModel();