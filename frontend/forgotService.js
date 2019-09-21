(function () {
    'use strict';
    angular.module('chatApp').service('forgotService', ['$http', function ($http) {
        this.forgotService = function(scopeObj) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/forgot',
                data: {
                    "email" : scopeObj.email,
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