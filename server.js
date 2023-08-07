const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts.js');

require('dotenv').config();
const port = process.env.PORT || 8080;
const CONNECTION_URL = process.env.CONNECTION_URL;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/data', postsRoutes);

mongoose.connect(CONNECTION_URL);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
