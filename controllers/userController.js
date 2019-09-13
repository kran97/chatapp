const userService = require('../services/userServices');


exports.registerController = (req, res) =>{
    let responseResult={};

   userService.registerService(req.body , (err , result) => {
    if(err){
        responseResult.success = false;
        responseResult.errors = err;
        return res.status(400).send(responseResult);
    }else{
        responseResult.success = true;
        responseResult.result = result;
            return res.status(200).send(responseResult); 
    }
   })
}

// const reqData = {
//     firstName:req.body.firstName
// }

// let errors = 


// if(errors){
//     responseResult.success = false;
// responseResult.errors = errors;
//     return res.status(400).send(responseResult);
// }else{