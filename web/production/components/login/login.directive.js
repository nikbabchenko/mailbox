app.directive('login', function (UserFactory, AuthTokenFactory) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'components/login/login.html',
        scope: {
            user: '='
        },
        link: link
    };

    function link (scope) {
        scope.login = login;
        scope.logout = logout;

        function login (username, password) {
            if (!username || !password) {
                alert('You should enter login and password');
                return;
            } else if (!username && !password) {
                alert('You should enter login and password');
                return;
            
            }

            UserFactory
                .login(username, password)
                .then(function success(response) {
                    console.log(response.data.user);
                    scope.user = response.data.user;
                    alert(response.data.token);
                    return response;
                }, handleError)
                .then(function (response) {
                    AuthTokenFactory.setToken(response.data.token);
                    return response;
                });

                function handleError (err) {
                    alert(err.data);
                    return err;
                };
        }

        function logout () {
            AuthTokenFactory.setToken();
            scope.user = null;
        }
    }
});