import mongoose, { Document, Schema } from 'mongoose';

export interface IWinner extends Document {
    name: string;
    prize: string; 
    date: number; 
    createdAt: Date;
    updatedAt: Date;
}

const winnerSchema: Schema<IWinner> = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        prize: {
            type: String,
            required: true,
        },
        date: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const WinnerModel = mongoose.model<IWinner>('Winner', winnerSchema);

export default WinnerModel;
