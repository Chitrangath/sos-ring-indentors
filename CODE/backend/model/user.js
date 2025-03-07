const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    emergencyContacts: [
        {
            name: { type: String, required: true },
            number: { type: String, required: true }
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
