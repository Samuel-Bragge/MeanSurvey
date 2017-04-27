app.factory('pollFactory', function ($http, $location, $routeParams) {


    var factory = {};
    factory.user = null;
    factory.login = function (user) {
        factory.user = user;
        $location.url('/dash')
    }
    factory.logout = function () {
        factory.user = null;
        $location.url('/')
    }
    factory.index = function (callback) {
        $http.get('/polls').then(function (response) {
            callback(response.data)
        })
    }

    factory.getPoll = function (id, callback) {

        $http.get('/polls/'+id).then(function (response) {
            if (response.data.success) {

                callback(response.data.poll[0]);
            }
        })
    }

    factory.create = function (newPoll) {
        newPoll.name = factory.user;

        $http.post('/polls', newPoll).then(function (response) {
            if (response.data.success) {
                $location.url('/dash')
            } else {
                console.log(response.data.errors);
            }
        })
    }

    factory.destroy = function (id) {
        $http.delete('/polls/'+id).then(function (response) {
            console.log(response.data);
        })
    }

    factory.vote = function (id, num) {
        console.log("VOTE IN THE FACTORY WITH ID AND NUM AS...", id, num);
        $http.post('/vote', {id:id, option:num}).then(function (response) {
            console.log(response);
        })
    }

    return factory;

})
