'use strict';

app.controller('CommonController', CommonController);

function CommonController ($state, $rootScope,  AuthTokenFactory) {
    var vm = this;

    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
        if (AuthTokenFactory.getToken()) {
            vm.user = true;
        }

        if (toState.name.indexOf("login") === -1) {
            if (!AuthTokenFactory.getToken()) {
                evt.preventDefault();
                $state.go('login');
            };
        }
    });


   $rootScope.$on('signed-in', function () {
        vm.user = true;
    });
    $rootScope.$on('signed-out', function () {
        vm.user = false;
    });

    vm.logout = logout;

    function logout () {
        AuthTokenFactory.setToken();
        goToSignIn();
    };

    function goToSignIn () {
        $state.reload();
        vm.user = false;
    }
}