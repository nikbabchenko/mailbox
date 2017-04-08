(function() {
    'use strict';

    angular
        .module('mailBox')
        .filter('mailBoxSearch', mailBoxSearch);

    function mailBoxSearch () {
        return function (arr, searchString) {
            if (!searchString) {
                return false;
            }

            var result = [];
            searchString = searchString.toLowerCase();

            angular.forEach(arr, function(item){
                if(item.name.toLowerCase().indexOf(searchString) !== -1){
                    result.push(item);
                }
            });

            return result;
        };
    }
}());