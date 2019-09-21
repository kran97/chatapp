(function () {
    'use strict';

    angular.module('chatApp').controller('registerCtrl',['$scope','registerService', function ($scope, registerService) {

        $scope.registerUser = function () {
            console.log($scope);            //printing $scope
            var scopeObj = {};
            $scope.dataLoading = true;
            scopeObj.firstName = $scope.firstName;
            scopeObj.lastName = $scope.lastName;
            scopeObj.email = $scope.email;
            scopeObj.password = $scope.password;
            registerService.registerService(scopeObj);
            console.log(scopeObj);
        };
        $scope.test = function () { //print and see what $scope does and what $scope.test does
            var test = true;
        };
    }])
})();