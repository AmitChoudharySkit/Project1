import mongoose from "mongoose";

// Replace the connection string with your Amazon DocumentDB connection string
const dbURI = 'mongodb://bhupendra:admin123@docdb-2024-07-17-05-42-42.cluster-cn6s2esoyp0r.ap-south-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false';

export const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
};
