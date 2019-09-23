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
        $scope.test = function () { //print and see what $scope does and what $scope.test does
            var test = true;
        };
    }])
})();