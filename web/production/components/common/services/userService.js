app.service('UserService', UserService);


function UserService($http) {
    var userList = 'http://jsonplaceholder.typicode.com/users';

    this.getUsers = getUsers;
    this.getUserById = getUserById;

    function getUsers() {
        return $http.get(userList, {
            withCredentials: true,
            cache: true
        });
    }

    function getUserById(id) {
        return $http.get(userList + '/' + id, {
            withCredentials: true,
            cache: true
        });
    }
}
