(function() {
    'use strict';

    angular
        .module('mailBox')
        .factory('UserFactory', UserFactory);

    function UserFactory ($http, API_URL) {
        return {
            login: login
        };

        function login (username, password) {
            return $http.post(API_URL + '/login', {
                username: username,
                password: password
            });
        }
    }
}());
