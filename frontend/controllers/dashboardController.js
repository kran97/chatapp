(function () {
    'use strict';

    angular.module('chatApp').controller('dashboardCtrl',['$scope','dashboardService', function ($scope, dashboardService) {

        $scope.dashboardUser = function () {
            var scopeObj = {};
            scopeObj.email = $scope.email;
            dashboardService.dashboardService(scopeObj);
        };
        $scope.test = function () { //print and see what $scope does and what $scope.test does
            var test = true;
        };
    }])
})();
