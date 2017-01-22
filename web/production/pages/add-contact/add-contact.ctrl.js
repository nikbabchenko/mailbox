angular
    .module('mailBox.addContact')
    .controller('AddContactPageController', AddContactPageController);

    function AddContactPageController ($window, UserService) {
        vm = this;
        vm.goBack = goBack;
        vm.addContact = addContact;

        function goBack() {
            $window.history.back();
        }
        function addContact(name, company, email, phone, site) {
          console.log(name, company, email, phone, site);

          UserService
            .addContact(name, company, email, phone, site);
        }

    };
