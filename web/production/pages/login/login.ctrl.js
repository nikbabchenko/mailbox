angular
    .module('mailBox.login')
    .controller('LoginPageController', LoginPageController);

    function LoginPageController ($rootScope, AuthTokenFactory) {
        vm = this;

        if (AuthTokenFactory.getToken()) {
            vm.user = 'user';
        }
    };