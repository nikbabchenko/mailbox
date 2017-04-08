(function() {
    'use strict';

    angular
        .module('mailBox')
        .factory('AuthInterCepter', AuthInterCepter);

    function AuthInterCepter (AuthTokenFactory) {
        return {
            request: addToken
        };

        function addToken (config) {
            var token = AuthTokenFactory.getToken();

            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = 'Bearer ' + token;
            }

            return config;
        }
    }
}());
