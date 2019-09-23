(function () {
    'use strict';
    angular.module('chatApp').service('forgotService', ['$http', '$state', function ($http, $state) {
        this.forgotService = function(scopeObj) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/forgotPassword',
                data: {
                    "email" : scopeObj.email
                }
            })
            .then(function(success) {
                console.log("success api ", success);
                $state.go('login');
            }
            , function(error) {
                console.log("error api ", error);
            })
        }
    }]);
    
})();