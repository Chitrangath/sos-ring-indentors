const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnect = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Connect to database
dbConnect();

// Routes
app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
