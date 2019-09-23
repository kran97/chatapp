(function () {
    'use strict';
    angular.module('chatApp').service('registerService', ['$http', '$state', function ($http, $state) {
        this.registerService = function(scopeObj) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/register',
                data: {
                    "firstName" : scopeObj.firstName,
                    "lastName" : scopeObj.lastName,
                    "email" : scopeObj.email,
                    "password" : scopeObj.password
                }
            })
            .then(function(success) {
                console.log("success api ", success);
                $state.go('dashboard');
            }
            , function(error) {
                console.log("error api ", error);
            })
        }
    }]);
    
})();