(function() {
    'use strict';

    angular
        .module('mailBox.login')
        .config(config);

    function config ($stateProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'pages/login/login.html',
                controller: 'LoginPageController'
            });
    }
}());

