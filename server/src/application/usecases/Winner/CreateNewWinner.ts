import Exception from "../../../domain/entity/Exception";
import Winner from "../../../domain/entity/Winner";
import WinnerRepository from "../../../domain/repository/WinnerRepository";

export default class CreateNewWinner {
    public constructor(
        private readonly WinnerRepository: WinnerRepository
    ) { }

    public async execute(input: Input) {
        
        if (!input) {
            throw new Exception("[CreateNewWinner Exception]: Required fields 'date' number, 'name' string and 'prize' string.");
        }

        if (!input.date || (input.date && isNaN(input.date))) {
            throw new Exception("[CreateNewWinner Exception]: Cannot create a winner without 'date' number key.");
        }

        if (!input.name || (input.name && typeof input.name !== "string")) {
            throw new Exception("[CreateNewWinner Exception]: Cannot create a winner without 'name' string key.");
        }

        if (!input.prize || (input.prize && typeof input.prize !== "string")) {
            throw new Exception("[CreateNewWinner Exception]: Cannot create a winner without 'prize' string key.");
        }

        const winner = new Winner(input.name, input.prize, input.date);
        await this.WinnerRepository.create(winner);
    }
}

export type Input = {
    name: string;
    prize: string;
    date: number;
}