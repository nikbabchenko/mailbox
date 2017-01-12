app.directive('menu', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'components/menu/menu.html'
    };
});
