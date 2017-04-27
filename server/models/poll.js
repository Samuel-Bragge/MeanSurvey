var mongoose = require('mongoose'),
    PollSchema = new mongoose.Schema({

        name: {type: String},
        question: {type: String, required:true, minlength:8},
        option1: {type: String, required:true, minlength:3},
        option1Votes: {type:Number, default:0},
        option2: {type: String, required:true, minlength:3},
        option2Votes: {type:Number, default:0},
        option3: {type: String, required:true, minlength:3},
        option3Votes: {type:Number, default:0},
        option4: {type: String, required:true, minlength:3},
        option4Votes: {type:Number, default:0},

    }, {timestamps:true});





mongoose.model('Poll', PollSchema)
