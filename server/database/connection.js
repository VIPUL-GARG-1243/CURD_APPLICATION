const mongoose = require("mongoose")

const connectionDB = async() => {
    try {
        const connectDB = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser:true, 
            useUnifiedTopoLogy:true
        })
        console.log(`MongoDB connected: ${connectDB.connection.host}`)
    }
    catch(err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectionDB;