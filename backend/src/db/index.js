import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);

    console.log('MONGODB URL:', connectionInstance.connection.host);
  } catch (error) {
    console.error('MongoDB connection failed');
    console.error(error);
    process.exit(1);
  }
};
