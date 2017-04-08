angular
    .module('mailBox')
    .directive('homepage', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: 'components/homepage/homepage.html',
            link: link
        };

        function link (scope) {
            scope.title = 'Hello Mail';
            scope.subtitle = 'Homepage';
        }
});
