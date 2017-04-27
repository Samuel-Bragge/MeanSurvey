var polls = require('./../controllers/polls.js')

module.exports = function (app) {
    app.get('/polls', function (req, res) {
        polls.index(req, res);
    })
    app.get('/polls/:id', function (req, res) {

        polls.getPoll(req, res);
    })
    app.post('/polls', function (req, res) {

        polls.create(req, res);
    })
    app.post('/vote', function (req, res) {
        console.log("VOTE IN BACK ROUTES WITH REQ.BODY AS...", req.body);
        polls.vote(req, res);
    })
    app.delete('/polls/:id', function (req, res) {
        polls.destroy(req, res);
    })




}
