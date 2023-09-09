const mongoose = require('mongoose');

const messageScheme = new mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    subject: {
        type: String,
        
    },
    user_dtls: {
        type: String,
        
    },
    
}, { timestamps: true });

const messageModel = mongoose.model('Message', messageScheme);
module.exports = messageModel;