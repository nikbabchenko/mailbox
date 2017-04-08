angular
    .module('mailBox')
    .directive('navbar', function (UserService) {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'components/navbar/navbar.html',
        link: link
    };

    function link(scope) {
        UserService
            .getUsers()
            .then(setUsers);

        function setUsers(userList) {
            scope.users = userList.data;
        }
    }
});
