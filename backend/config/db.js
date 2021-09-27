require('dotenv').config();
const mongoose = require('mongoose');

const connectDB= async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MONGODB connection successful")
    } catch (error) {
        console.log("conncetion Failed")
        process.exit(1);
    }
}

module.exports = connectDB;