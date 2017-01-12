(function() {
    'use strict';

    angular
        .module('mailBox.mailPage')
        .config(config);

    function config ($stateProvider) {
        'use strict';

        $stateProvider
            .state('inbox', {
                url: '/inbox',
                templateUrl: '/pages/mail-page/mail-page.html',
                controller: 'MailPageController'
            })
            .state('drafts', {
                url: '/drafts',
                templateUrl: '/pages/mail-page/mail-page.html',
                controller: 'MailPageController'
            })
            .state('sent', {
                url: '/sent',
                templateUrl: '/pages/mail-page/mail-page.html',
                controller: 'MailPageController'
            });
    }
}());
