angular
    .module('mailBox')
    .directive('search', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            arr: '='
        },
        templateUrl: 'components/search/search.html',
        link: link
    };

    function link (scope) {
        scope.clearInput = clearInput;

        function clearInput () {
            scope.searchString = '';
        }
    }
});

