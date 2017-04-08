angular
    .module('mailBox.login')
    .controller('LoginPageController', LoginPageController);

    /* @ngInject */
    function LoginPageController ($rootScope, AuthTokenFactory) {
        var vm = this;

        if (AuthTokenFactory.getToken()) {
            vm.user = 'user';
        }
    }