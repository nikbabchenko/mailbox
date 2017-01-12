app.service('MailService', MailService);

function MailService ($http) {
    this.getAll = function () {
        return $http.get("mails.json");
    };
    this.getItem = function (id) {
        return $http.get("mails.json + '/' + id");
    };
}
