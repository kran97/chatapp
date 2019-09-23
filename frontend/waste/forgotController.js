(function () {
    'use strict';

    angular.module('chatApp').controller('forgotCtrl',['$scope','forgotService', function ($scope, forgotService) {

        $scope.forgotUser = function () {
            console.log($scope);            //printing $scope
            var scopeObj = {};
            $scope.dataLoading = true;
            scopeObj.email = $scope.email;
            forgotService.forgotService(scopeObj);
            console.log(scopeObj);
        };
        $scope.test = function () { //print and see what $scope does and what $scope.test does
            var test = true;
        };
    }])
})();