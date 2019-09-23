const userModel = require('../models/userModel');
exports.registerService = (body, callback) => {

userModel.register(body , (err , result) => {
    if(err){
        callback(err);
    }else{
        callback(null ,result);
    }
})
}

exports.loginService = (body, callback) => {

    userModel.login(body, (err, result) => {
        if(err){
            callback(err);
        }
        else{
            callback(null, result);
        }
    })
}

exports.forgotService = (body, callback) => {
    userModel.forgot(body, (err,result) => {
        if(err)
        {
            callback(err);
        }
        else
        {
            callback(null, result);
        }
    })
}

exports.resetService = (req, callback) => {
    userModel.reset(req, (err, result) => {
        if(err)
        {
            callback(err);
        }
        else
        {
            callback(null, result);
        }
    })
}

exports.getUsersService = (body, callback) => {
    userModel.getUsers(body, (err, result) => {
        if(err)
        {
            callback(err);
        }
        else
        {
            callback(null, result);
        }
    })
}