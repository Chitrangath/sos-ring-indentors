const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/sosring', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = dbConnect;
