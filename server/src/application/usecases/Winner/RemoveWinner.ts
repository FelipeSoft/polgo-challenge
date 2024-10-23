import Exception from "../../../domain/entity/Exception";
import WinnerRepository from "../../../domain/repository/WinnerRepository";

export default class RemoveWinner {
    public constructor (
        private readonly WinnerRepository: WinnerRepository
    ) {}

    public async execute (input: Input) {
        if (!input.winnerId) {
            throw new Exception("[RemoveWinner Exception]: Cannot remove a winner without 'winnerId' URL param.");
        }
        await this.WinnerRepository.delete(input.winnerId);
    }
}

export type Input = {
    winnerId: string; 
}