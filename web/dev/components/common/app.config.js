angular
    .module('mailBox')
    .config(function ($stateProvider, $httpProvider) {
    $stateProvider
        .state('help', {
            url: '/help',
            template: '<help></help>'
        })
        .state('mail', {
            url: '/inbox/:id',
            template: '<mail></mail>'
        })
        .state('contacts', {
            url: '/contacts',
            template: '<contacts-list></contacts-list>'
        })
        .state('user', {
            url: '/user/:id',
            template: '<contact><contact>'
        })
        .state('home', {
            url: '',
            template: '<homepage><homepage>'
        });

        $httpProvider.interceptors.push('AuthInterCepter');
});

