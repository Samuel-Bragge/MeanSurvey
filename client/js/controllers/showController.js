app.controller('showController', function (pollFactory, $routeParams) {
    if (!pollFactory.user) {
        pollFactory.logout();
    }
    var self = this;
    var id = $routeParams.id

    var getPoll = function () {
        pollFactory.getPoll(id, function (data) {
            self.poll = data;
        });
    }
    getPoll();

    this.vote = function (id, num) {
        console.log("VOTE IN FRONT CONTROLLER WITH ID AND NUM AS...", id, num);
        pollFactory.vote(id, num);
        getPoll();
    }

})
