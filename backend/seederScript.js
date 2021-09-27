require('dotenv').config();

const productsData =  require('./data/products');
const Product = require('./models/Product');
const connectDB = require('./config/db');

connectDB();

const importData = async() => {
    try {
        await Product.deleteMany({})

        await Product.insertMany(productsData);
        
        console.log("Data Import Success")

        process.exit();
    } catch (error) {
        console.log("error with data import");
        process.exit(1);
    }
}

importData();
