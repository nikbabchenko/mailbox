angular
    .module('mailBox')
    .directive('menu', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'components/menu/menu.html'
    };
});
