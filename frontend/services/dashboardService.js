(function () {
    'use strict';
    angular.module('chatApp').service('dashboardService', ['$https', function($http) {
        this.dashboardService = function(scopeObj, callback) {
            $http ({
                method: 'GET',
                url: 'http://localhost:3000/dashboard',
                data: scopeObj
            })
            .then(function(success) {
                console.log(scopeObj);
                console.log("success api ", success);
                console.log(success);
                callback(null, success.data.result);
            },
            function(error) {
                console.log(scopeObj);
                console.log("error api ", error);
                callback(err);
            })
        }
    }]);
})();