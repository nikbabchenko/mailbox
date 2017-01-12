'use strict';

app.controller('CommonController', CommonController);

function CommonController ($state, $rootScope, AuthTokenFactory) {
    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
        if (toState.name.indexOf("login") === -1) {
            if (!AuthTokenFactory.getToken()) {
                evt.preventDefault();
                $state.go('login');
            }
        }
    });
}