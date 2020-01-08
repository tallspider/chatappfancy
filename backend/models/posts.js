const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    datetime: Date,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String
});


//first is name of model, second is schema
module.exports = mongoose.model('Chat', chatSchema);
