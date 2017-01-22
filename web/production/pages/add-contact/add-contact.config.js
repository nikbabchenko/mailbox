(function() {
    'use strict';

    angular
        .module('mailBox.addContact')
        .config(config);

    function config ($stateProvider) {
        'use strict';

        $stateProvider
            .state('addContact', {
                url: '/add-contact',
                templateUrl: '/pages/add-contact/add-contact.html',
                controllerAs: 'AddContactPageController'
            })
    }
}());

