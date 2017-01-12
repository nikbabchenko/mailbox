app.factory('UserFactory', UserFactory);

function UserFactory ($http, API_URL) {
    'use strict';

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
