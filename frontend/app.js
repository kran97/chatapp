var chatApp = angular.module('chatApp', ['ui.router']);

chatApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    console.log($stateProvider)
    console.log($urlRouterProvider)
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './templates/home.html'
        })

        // .state('home.dashboard', {
        //     url: '/dashboard',
        //     templateUrl: 'partialDashboard.html',
        //     controller: 'dashboardCtrl'
        // })

        .state('login', {
            url: "/login",
            templateUrl: "./templates/loginForm.html",
            controller: 'loginCtrl'
        })

        .state('register', {
            url: "/register",
            templateUrl: "./templates/registerForm.html",
            controller: 'registerCtrl'
        })

        .state('forgot', {
            url: "/forgot",
            templateUrl: "./templates/forgot.html",
            controller: 'forgotCtrl'
        })

        .state('reset', {
            url: '/reset/:tokens',
            templateUrl: './templates/reset.html',
            controller: 'resetCtrl'
        })

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: './templates/dashboard.html',
            controller: 'dashboardCtrl'
        })
    $urlRouterProvider.otherwise('home');

}]);

// chatApp.controller('homeCtrl', function($scope, $state) {
//     if($scope.userID == undefined) {
//         $state.go('home');
//     }
// })