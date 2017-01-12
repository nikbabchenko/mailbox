app.directive('help', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'components/help/help.html',
        link: link
    }

    function link (scope) {
        scope.title = 'FAQ';
    }
});
