const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const {connectToMongoDB} = require('./db/connection')
const flash = require('connect-flash')
const session = require('express-session');

const app = express();

const PORT = process.env.PORT || 5000; 

// connect to MongoDB (Not a best practice)
connectToMongoDB('mongodb://127.0.0.1:27017/passportAuth')

// EJS Middlewares
app.use(expressLayouts);
app.set('view engine', 'ejs');

// body parser
app.use(express.urlencoded({ extended: false}));

// Express session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  }))

//   connect flash middleware
app.use(flash())

// global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
})

// Routes
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/users'));

app.listen(PORT, () => {
    console.log("Server Started on Port: " + PORT)
})