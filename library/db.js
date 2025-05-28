import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connect = async() => {
    try{
        await mongoose.connect(
            process.env.MONGODB_URI
        )
        console.log("MongoDB connected successfully");
        
    }catch(err){
        console.error("Error connecting to MongoDB:", err);
        console.error(err.message);
        process.exit(1); // Exit the process with failure           
    }
}

export default connect;