app.service('UserService', UserService);


function UserService($http, $window) {
    var userList = 'http://jsonplaceholder.typicode.com/users';
    var store = $window.localStorage;
    var contacts;
    var currentContact;

    this.getUsers = getUsers;
    this.getUserById = getUserById;
    this.addContact = addContact;

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

    function addContact(name, company, email, phone, site) {
      if (!store.getItem('contacts')) {
        contacts = [];
        saveCurrentContact.apply(null, [name, company, email, phone, site, contacts])

      } else {
        contacts = store.getItem('contacts');
        contacts = JSON.parse(contacts);
        saveCurrentContact.apply(null, [name, company, email, phone, site, contacts])
      }

      function saveCurrentContact(name, company, email, phone, site, contacts) {
        currentContact = {
          name: name,
          company: company,
          email: email,
          phone: phone,
          site: site,
          id: contacts.length + 1
        };

        contacts.push(currentContact);
        contacts = JSON.stringify(contacts, null, '\t');
        store.setItem('contacts', contacts);
      }

    }
}
