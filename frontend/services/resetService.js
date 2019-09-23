(function() {
    'use strict';

    angular.module('chatApp').service('resetService', ['$http', '$state', function($http, $state) {
        this.resetService = function(scopeObj, tokens) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/reset',
                data: {
                    "password" : scopeObj.password
                },
                headers: {
                    "tokens" : tokens
                }
            })
            .then(function(success){
                console.log("success api ", success);
                $state.go('login');
            },
            function(err) {
                console.log("Error api ", err);
            })
        }
    }]);

})();