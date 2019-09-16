const express = require('express');
const expressValidator = require("express-validator");
const app = express();
const userService = require('../services/userServices');

exports.registerController = (req, res) =>{
    let responseResult={};
    req.body.checkBody('firstName').not().isEmpty(),
    req.body.checkBody('lastName').not().isEmpty()
    // req.checkBody('email').isEmail(),
    // req.checkBody('email').not().isEmpty(),
    // req.checkBody('password').isLength({min : 6}),
    // req.checkBody('password').not().isEmpty()
    var error=app.ValidationErrors();
    if(error){
        console.log("validation error");
        responseResult.success = false;
        responseResult.errors = err;
        responseResult.message = 'validation error';
        return res.status(400).send(responseResult);
    }

else{
   userService.registerService(req.body , (err , result) => {

    if(err){
        responseResult.success = false;
        responseResult.errors = err;
        responseResult.message = 'Cannot register';
        return res.status(400).send(responseResult);
    }else{
        responseResult.success = true;
        responseResult.result = result;
        responseResult.message = 'Registered Successfully';
        return res.status(200).send(responseResult); 
    }

   })
}
}
exports.loginController = (req, res) => {
    let responseResult = {};

    userService.loginService(req.body, (err, result) => {
        if(err){
            responseResult.success = false;
            responseResult.errors = err;
            responseResult.message = 'Cannot login';
            res.status(500).send(responseResult);
        }else{
            responseResult.success = true;
            responseResult.result = result;
            responseResult.message = 'Logged In';
            res.status(200).send(responseResult);
        }
    })
}

exports.forgotController = (req, res) => {
    let responseResult = {};

    userService.forgotService(req.body, (err, result) => {
        if(err){
            responseResult.success = false;
            responseResult.errors = err;
            responseResult.message = 'Cannot find email';
            res.status(500).send(responseResult);
        }else{
            responseResult.success = true;
            responseResult.result = result;
            responseResult.message = 'Email sent';
            res.status(200).send(responseResult);
        }
    })
}