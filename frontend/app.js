var chatApp = angular.module('chatApp', ['ui.router']);

chatApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    console.log($stateProvider)
    console.log($urlRouterProvider)
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './home.html'
        })

        // .state('home.dashboard', {
        //     url: '/dashboard',
        //     templateUrl: 'partialDashboard.html',
        //     controller: 'dashboardCtrl'
        // })

        .state('login', {
            url: "/login",
            templateUrl: "loginForm.html",
            controller: 'loginCtrl'
        })

        .state('register', {
            url: "/register",
            templateUrl: "registerForm.html",
            controller: 'registerCtrl'
        })

        .state('forgot', {
            url: "/forgot",
            templateUrl: "forgot.html",
            controller: 'forgotCtrl'
        })
    $urlRouterProvider.otherwise('home');

}]);

// chatApp.controller('homeCtrl', function($scope, $state) {
//     if($scope.userID == undefined) {
//         $state.go('home');
//     }
// })