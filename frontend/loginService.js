(function () {
    'use strict';
    angular.module('chatApp').service('loginService', ['$http', function ($http) {
        this.loginService = function(scopeObj) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/login',
                data: {
                    "email" : scopeObj.email,
                    "password" : scopeObj.password
                }
            })
            .then(function(success) {
                console.log("success api ", success);
            }
            , function(error) {
                console.log("error api ", error);
            })
        }
    }]);
    
})();


// app.service("service", function ($http) {
//     this.loginService=function(scopeObj){
//     $http({
//     method: 'POST',
//     url: 'http://localhost:5000/login',
//     data: scopeObj,
//     })
//     .then(function (success) {
//     console.log("success api ", success);
//     }
//     , function (error) {
//     console.log("error api ", error);
    
//     }) 
//     }
//     })