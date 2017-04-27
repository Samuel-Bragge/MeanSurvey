app.controller('dashController', function (pollFactory, $routeParams) {
    if (!pollFactory.user) {
        pollFactory.logout();
    }
    var self = this;
    var index = function () {
        pollFactory.index(function (data) {
            self.polls = data;
        });
    }
    index()
    this.login = function () {
        if (!this.user) {
            this.error = "Name is required!"
        } else {
            pollFactory.login(this.user);
        }
    }

    this.destroy = function (id) {
        pollFactory.destroy(id);
        index()

    }


})
