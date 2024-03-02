
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
        res.send("Logged In Successfully");
    } catch (error) {
        console.log("Error: ", error);
    }
}

exports.register = async(req, res) => {
    try {
        console.log(req.body);
        const {name, email, password, password2} = req.body;

        const errors = [];

        if(!name || !email || !password  || !password2) {
            return res.status(404).json({errors: errors});
        }

        res.send("Registered Successfully");        
    } catch (error) {
        console.log("Error: ", error);
    }
}