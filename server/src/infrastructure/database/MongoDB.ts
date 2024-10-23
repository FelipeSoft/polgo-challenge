import mongoose from 'mongoose';

export default async function makeConnectionWithMongoDB() {
    try {
        if (!process.env.MONGODB_URL) {
            console.error('MONGODB_URL environment variable is required!');
            return;
        }
        await mongoose.connect(process.env.MONGODB_URL);

        console.log('Connected successfully with MongoDB.');
    } catch (error) {
        console.error('[MongoDB Error Connection]: ', error);
    }
}

