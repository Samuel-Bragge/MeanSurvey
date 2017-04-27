app.controller('newController', function (pollFactory) {
    if (!pollFactory.user) {
        pollFactory.logout();
    }
    this.newPoll = {};
    this.errors = [];
    this.create = function () {
        if (!this.newPoll.question) {this.errors.push("Question is required")}
        if (!this.newPoll.option1) {this.errors.push("Option 1 is required")}
        if (!this.newPoll.option2) {this.errors.push("Option 2 is required")}
        if (!this.newPoll.option3) {this.errors.push("Option 3 is required")}
        if (!this.newPoll.option4) {this.errors.push("Option 4 is required")}
        else {
            console.log("IN CREATE FRONT CONTROLLER WITH THE NEWPOLL AS...", this.newPoll);
            pollFactory.create(this.newPoll);
        }
    }
});
