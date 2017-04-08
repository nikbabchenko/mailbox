(function() {
    'use strict';

    angular
        .module('mailBox.addContact')
        .config(config);

    function config ($stateProvider) {

        $stateProvider
            .state('addContact', {
                url: '/add-contact',
                templateUrl: 'pages/add-contact/add-contact.html'
            });
    }
}());

