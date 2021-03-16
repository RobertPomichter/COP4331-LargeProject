// import packages
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


// load env variables
const dotenv = require('dotenv');
dotenv.config();

// db connection
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => console.log(`DB connection error: ${err.message}`));

// import the routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');

// Middleware
app.use(morgan('dev'));
app.use(expressValidator());
app.use(bodyParser.json());
app.use('/', postRoutes);
app.use('/', authRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));