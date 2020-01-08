const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    chatname: String,
    users: [{
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    }],
    messages: [{
        datetime: Date,
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        content: String


    }]
});


//first is name of model, second is schema
module.exports = mongoose.model('Chat', chatSchema);
