const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const {connectToMongoDB} = require('./db/connection')

const app = express();

const PORT = process.env.PORT || 5000; 

// connect to MongoDB (Not a best practice)
connectToMongoDB('mongodb://127.0.0.1:27017/passportAuth')

// EJS Middlewares
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false}));

// Routes
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/users'));

app.listen(PORT, () => {
    console.log("Server Started on Port: " + PORT)
})