'use strict';

angular
    .module('mailBox', [
        'ui.router',
        'mailBox.mailPage',
        'mailBox.login',
        'mailBox.addContact'
    ]);
var app = angular.module('mailBox');
