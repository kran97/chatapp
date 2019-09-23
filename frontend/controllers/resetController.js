(function () {
    'use strict';

    angular.module('chatApp').controller('resetCtrl', ['$scope', '$stateParams', 'resetService', function($scope, $stateParams, resetService) {
        $scope.resetUser = function () {
            $scope.id = $stateParams.tokens;
            var scopeObj = {};
            scopeObj.password = $scope.password;
            resetService.resetService(scopeObj, $scope.id);
        };
        $scope.test = function () { //print and see what $scope does and what $scope.test does
            var test = true;
        };
    }]);

}) ();