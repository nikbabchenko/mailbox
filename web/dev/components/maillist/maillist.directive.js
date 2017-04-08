angular
    .module('mailBox')
    .directive('mailList', function($state, MailService) {
    return {
        replace: true,
        restrict: 'E',
        scope: 'true',
        templateUrl: 'components/maillist/maillist.html',
        link: link
    };

    function link(scope) {
        var title = $state.current.name;
        title = title[0].toUpperCase() + title.slice(1);
        scope.title = title;

        scope.showFullMail = showFullMail;

        MailService.getAll()
            .then(function(mails) {
                scope.mails = mails.data;
            });

        function showFullMail(element) {
            $state.go('mail', {
                id: element.id
            });
        }
    }
});
