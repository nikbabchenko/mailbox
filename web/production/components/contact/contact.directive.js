app.directive('contact', function (UserService, $state, $timeout) {
    return {
        replace: true,
        restrict: 'E',
        scope: 'true',
        templateUrl: 'components/contact/contact.html',
        link: link
    };

    function link(scope) {
        console.log($state);
        var id = $state.params.id;
        var contact;
        scope.showControls = false;

        UserService
            .getUserById(id)
            .then(setUser)
            .then(init);

        function setUser (user) {
            scope.user = user.data;
        }

        function init () {
            $timeout(function () {
                scope.showControls = true;
            }, 300);
        }
    }

});
