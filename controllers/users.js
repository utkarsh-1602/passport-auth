const User = require('../models/users')

exports.HomePage = async(req, res) => {
    try {
        console.log("HomePage");

    } catch (error) {
        console.log("Error: ", error);
    }
}

exports.login = async(req, res) => {
    try {
        console.log(req.body);
        const {email, password} = req.body;

        if(!email || !password) {
            req.flash('error_msg', 'All fields are required');
        }

        // Check if the user exists in the database
        const user = await User.findOne({ email });
        console.log("USER EMAIL EXISTS: ", user)

        if (!user) {
            req.flash('error_msg', 'Invalid email or password');
            return res.redirect("/login");
        }

        const username = user.name;

        return res.status(201).redirect(`dashboard?userName=${user.name}`);
    } catch (error) {
        console.log("Error: ", error);
    }
}

exports.register = async(req, res) => {
    try {
        console.log(req.body);
        const {name, email, password, password2} = req.body;

        if(!name || !email || !password  || !password2) {
            return res.status(404).json("All fields are required");
        }
        

        // check password match 
        if(password != password2){
            return res.status(404).json("Password does not match");
        }

        // check pass length
        if (password.length < 6) {
            res.status(400).json("Password length must be at least 6 characters");
        }

        await User.create({
            name,
            email, 
            password
        })

        req.flash('success_msg', 'Congratulations you are Registered! Please Login 😉');
        return res.status(201).redirect("/login");

    } catch (error) {
        console.log("Error: ", error);
    }
}

