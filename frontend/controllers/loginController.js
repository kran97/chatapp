(function () {
    'use strict';

    angular.module('chatApp').controller('loginCtrl',['$scope','loginService', function ($scope, loginService) {

        $scope.loginUser = function () {
            console.log($scope);            //printing $scope
            var scopeObj = {};
            $scope.dataLoading = true;
            scopeObj.email = $scope.email;
            scopeObj.password = $scope.password;
            loginService.loginService(scopeObj);
            console.log(scopeObj);
        };
        console.log("inside login")
        $scope.test = function () { //print and see what $scope does and what $scope.test does
            var test = true;
        };
    }])
})();

// app.controller("loginController",function($scope,service){ 
//     $scope.loginUser=function (){
//     console.log($scope);
//     console.log("login user submit button hit");
//     var scopeObj={};
//     scopeObj.email=$scope.email;
//     scopeObj.password=$scope.password;
//     service.loginService(scopeObj);
//     }
//     })