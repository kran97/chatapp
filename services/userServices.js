const userModel = require('../app/models/userModel');

exports.registerService = (body, callback) => {

userModel.register(body , (err , result) => {
    if(err){
        callback(err);
    }else{
        callback(null ,result);
    }
})
}