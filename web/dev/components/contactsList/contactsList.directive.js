angular
    .module('mailBox')
    .directive('contactsList', function ($state, UserService) {
    return {
        replace: true,
        restrict: 'E',
        scope: {},
        templateUrl: 'components/contactsList/contactsList.html',
        link: link
    };

    function link (scope) {
        scope.title = 'Contacts - the main part of app';
        scope.showUser = showUser;
        scope.showControls = false;

        UserService
            .getUsers()
            .then(setUsers)
            .then(init);

        function setUsers(userList) {
            scope.users = userList.data;
        }

        function showUser (userId) {
            $state.go('user', {
                id: userId
            });
        }

        function init () {
            scope.showControls = true;
        }
    }
});
