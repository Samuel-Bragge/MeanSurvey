var mongoose = require('mongoose'),
    Poll = mongoose.model('Poll')

module.exports = {

    index:function (req, res) {
        Poll.find({}, function (err, polls) {
            if (err) {
                console.log("error...", err);
            } else {
                res.json(polls)
            }
        })
    },

    getPoll:function (req, res) {
        console.log("GETPOLL IN BACK CONTROLLER WITH ID...", req.params.id);
        Poll.find({_id:req.params.id}, function (err, poll) {
            if (err) {
                console.log("ERROR FINDING ONE POLL...");
            } else {
                res.json({success:true, poll:poll})
            }
        })
    },

    create:function (req, res) {
        console.log("NEWPOLL IN THE BACK CONTROLLER AS...", req.body);
        var new_poll = new Poll(req.body)
        new_poll.save(function (err) {
            if (err) {
                res.json({success:false, errors:err.errors})
            } else {
                res.json({success:true, message:"successuflly saved new poll to database"})
            }
        })
    },

    destroy:function (req, res) {
        Poll.remove({_id:req.params.id}, function (err) {
            if (err) {
                res.json({success:false, error:"error deleting poll from database"})
            } else {
                res.json({success:true, message:"success deleting poll from database"})
            }
        })
    },

    vote:function (req, res) {
        console.log("VOTE IN BACK CONTROLLER WITH REQ.BODY AS...", req.body);
        Poll.findOne({_id:req.body.id}, function (err, poll) {
            if (err) {
                console.log("ERROR FINDING ONE POLL");
            } else {
                if (req.body.option == 1) {
                    poll.option1Votes += 1;
                } else if (req.body.option == 2) {
                    poll.option2Votes += 1;
                } else if (req.body.option == 3) {
                    poll.option3Votes += 1;
                } else if (req.body.option == 4) {
                    poll.option4Votes += 1;
                }
                poll.save(function (err) {
                    if (err) {
                        res.json({success:false, errors:"error adding vote to option then saving poll"})
                    } else {
                        res.json({success:true, message:"success saving poll after vote"})
                    }
                })
            }
        })
    }

}
