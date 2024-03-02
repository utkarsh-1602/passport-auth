const mongoose = require('mongoose')

const connectToMongoDB = async(url) => {
    try {
        console.log("Connecting to MongoDB using URL:", url);
        await mongoose.connect(url);
        if(mongoose.connection.readyState === 1){
            console.log("MongoDB connected");
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = {
    connectToMongoDB
};