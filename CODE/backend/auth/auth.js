const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
    const { fullName, email, address, phone, emergencyContactName, emergencyContactNumber } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.json({ success: false, message: 'User already exists. Please login.' });
        }

        user = new User({
            fullName,
            email,
            address,
            phone,
            emergencyContacts: [{ name: emergencyContactName, number: emergencyContactNumber }]
        });

        await user.save();
        return res.json({ success: true, message: 'Registration successful' });
    } catch (err) {
        return res.json({ success: false, message: 'Error registering user' });
    }
});

// Login User
router.post('/login', async (req, res) => {
    const { loginEmail } = req.body;

    try {
        const user = await User.findOne({ email: loginEmail });
        if (!user) {
            return res.json({ success: false, message: 'User not found. Please register.' });
        }

        return res.json({ success: true, user });
    } catch (err) {
        return res.json({ success: false, message: 'Error logging in' });
    }
});

module.exports = router;
