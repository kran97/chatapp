const express = require('express');
const userService = require('../services/userServices');

exports.registerController = (req, res) => {
    let responseResult = {};
    req.checkBody('firstName', 'First name cannot be empty').not().isEmpty(),
        req.checkBody('lastName', 'Last name cannot be empty').not().isEmpty(),
        req.checkBody('email', 'proper email format required').isEmail(),
        req.checkBody('email', 'email cannot be empty').not().isEmpty(),
        req.checkBody('password', 'Minimum length required is 6').isLength({ min: 6 }),
        req.checkBody('password', ' password cannot be empty').not().isEmpty()
    var error = req.validationErrors();
    if (error) {
        console.log("validation error");
        responseResult.success = false;
        responseResult.errors = error;
        responseResult.message = 'validation error';
        res.status(400).send(responseResult);
    }

    else {
        userService.registerService(req.body, (err, result) => {

            if (err) {
                responseResult.success = false;
                responseResult.errors = err;
                responseResult.message = 'Cannot register';
                res.status(400).send(responseResult);
            } else {
                responseResult.success = true;
                responseResult.result = result;
                responseResult.message = 'Registered Successfully';
                res.status(200).send(responseResult);
            }

        })
    }
}
exports.loginController = (req, res) => {
    let responseResult = {};

    userService.loginService(req.body, (err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.errors = err;
            responseResult.message = 'Cannot login';
            res.status(500).send(responseResult);
        } else {
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
        if (err) {
            responseResult.success = false;
            responseResult.errors = err;
            responseResult.message = 'Cannot find email';
            res.status(500).send(responseResult);
        } else {
            responseResult.success = true;
            responseResult.result = result;
            responseResult.message = 'Email sent';
            res.status(200).send(responseResult);
        }
    })
}

exports.resetController = (req,res) => {
    let responseResult = {};
    userService.resetService(req, (err, result) => {
        if(err) {
            responseResult.success = false;
            responseResult.errors = err;
            responseResult.message = 'Cannot reset password';
            res.status(500).send(responseResult);
        }else {
            responseResult.success = true;
            responseResult.result = result;
            responseResult.message = 'Password reset successfully';
            res.status(200).send(responseResult);
        }
    })
}

exports.getUsersController = (req, res) => {
    let responseResult={};
    userService.getUsersService(req.body, (err, result) => {
        if(err) {
            responseResult.success = false;
            responseResult.errors = err;
            responseResult.message = 'Cannot retreive all users';
            res.status(500).send(responseResult);
        }else {
            responseResult.success = true;
            responseResult.result = result;
            responseResult.message = 'All users retreived';
            res.status(200).send(responseResult);
        }
    })
}