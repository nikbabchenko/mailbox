angular
    .module('mailBox')
    .directive('mail', function (MailService, $state) {
    return {
        replace: true,
        restrict: 'E',
        scope: 'true',
        templateUrl: 'components/mail/mail.html',
        link: link
    };

    function link(scope) {
        var id = $state.params.id;
        var mail;
        var storage = localStorage;
        var storageItemName = 'mail' + id;
        var retrieveMail;
        scope.isEdit = false;
        scope.editMail = editMail;
        scope.saveMail = saveMail;

        if (storage.getItem(storageItemName)) {
            setMailFromStorage(storageItemName);
        } else {
            init();
        }

        function setMailFromStorage (storageItemName) {
            retrieveMail = storage.getItem(storageItemName);
            scope.mail = JSON.parse(retrieveMail);
        }

        function init () {
            MailService.getAll()
                .then(function (mails) {
                    scope.mails = mails.data;
                    showFullMail(id);
                    scope.mail = mail;
                    console.log(mail);
                });
        }

        function showFullMail(id) {
            var mailPos = scope.mails.map(function(x) {
                return x.id;
            }).indexOf(parseInt(id));
            mail = scope.mails[mailPos];
        }


        function editMail () {
            scope.isEdit = true;
        }

        function saveMail () {
            storage.setItem('mail' + scope.mail.id, JSON.stringify(scope.mail));
            console.log(scope.mail);
            scope.isEdit = false;
        }
    }
});
