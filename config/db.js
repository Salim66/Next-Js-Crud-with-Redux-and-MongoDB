import mongoose from 'mongoose';

// create connection
const connectMongoDB = async () => {
    try {
        const connect = mongoose.connect(process.env.MONGO);
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.log(error.message);
    }
}

// export connection
export default connectMongoDB;