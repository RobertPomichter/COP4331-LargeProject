// import packages
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
const fs = require('fs');


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

// import the routes necessary for the middleware
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// middleware
app.use(morgan('dev'));
app.use(expressValidator());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/', postRoutes);
app.use('/', authRoutes);
app.use('/', userRoutes);

// middleware to handle error for signInRequired
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({error: "You must be signed in to complete this action."});
    }
});


// route to get api documents
app.get('/', (req, res) => { 
  // use the file system to retrieve the document
  fs.readFile("./docs/apiDocs.json", (err, data) => {
    // handle any errors
    if(err){
      res.status(400).json({error: err});
    }

    // parse the document
    const doc = JSON.parse(data);

    // send the json document
    res.json(doc);
  });
});

// the ports we will listen for
const PORT = process.env.PORT || 8080;

// event listener
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));