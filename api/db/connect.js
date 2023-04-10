const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set('strictQuery', true);
// const connectDB = (uri) =>{

// 	console.log("connect db");
// 	return mongoose.connect(uri, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true
// 	});
// };

    
    
    const connectDB = async (uri) => {
      try {
    const db = process.env.MONGODB_URL;
        console.log(db);
        console.log(uri);
        await mongoose.connect(`${uri}`, {
          useNewUrlParser: true, 
          useUnifiedTopology: true
        });
        console.log('MongoDB connected');
      } catch (error) {
        console.log(error.message);
        process.exit(1);
      }
    };


module.exports = connectDB;