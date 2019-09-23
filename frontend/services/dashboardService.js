(function () {
    'use strict';
    angular.module('chatApp').service('dashboardService', ['$https', function($http) {
        this.dashboardService = function(callback) {
            $http ({
                method: 'GET',
                url: 'http://localhost:3000/dashboard'
            })
            .then(function(success) {
                //console.log(scopeObj);
                console.log("success api ", success);
                callback();
            },
            function(error) {
                console.log(scopeObj);
                console.log("error api ", error);
            })
        }
    }]);
})();