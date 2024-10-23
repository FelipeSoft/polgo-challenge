import Exception from "../../../domain/entity/Exception";
import Winner from "../../../domain/entity/Winner";
import WinnerRepository from "../../../domain/repository/WinnerRepository";
import WinnerModel from "../models/mongoose/WinnerModel";

export default class WinnerRepositoryMongoDB implements WinnerRepository {
    public async create(winner: Winner): Promise<void> {
        await WinnerModel.create(winner);
    }

    public async all(): Promise<Winner[] | []> {
        let output: Winner[] = []
        const winners = await WinnerModel.find();
        for (const winner of winners) {
            output.push(new Winner(winner.name, winner.prize, winner.date));
        }
        return output;
    }

    public async delete(winnerId: string): Promise<void> {
        try {
            const foundWinner = await WinnerModel.findById(winnerId);
            if (!foundWinner) {
                throw new Exception(`[WinnerRepositoryMongoDB Exception]: Cannot found winner with provided winnerId ${winnerId}.`);
            }
            await WinnerModel.findByIdAndDelete(winnerId).exec();
        } catch (error) {
            throw error;
        }
    }
}