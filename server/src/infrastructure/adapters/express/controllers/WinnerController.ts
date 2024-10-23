import { Request, Response } from "express";
import ListAllWinners from "../../../../application/usecases/Winner/ListAllWinners";
import CreateNewWinner from "../../../../application/usecases/Winner/CreateNewWinner";
import RemoveWinner from "../../../../application/usecases/Winner/RemoveWinner";
import Exception from "../../../../domain/entity/Exception";

export default class WinnerController {
    public constructor(
        private readonly allWinnersUseCase: ListAllWinners,
        private readonly createWinnerUseCase: CreateNewWinner,
        private readonly removeWinnerUseCase: RemoveWinner
    ) { }

    public async createWinner(request: Request, response: Response) {
        try {
            await this.createWinnerUseCase.execute(request.body);
            return response.status(201).json({ message: "Created winner successfully!" });
        } catch (error) {
            if (error instanceof Exception) {
                return response.status(400).json({ error: error.message });
            }
            return response.status(500).json({ error: "Internal Server Error" });
        }
    }

    public async allWinners(request: Request, response: Response) {
        try {
            const listOfWinners = await this.allWinnersUseCase.execute();
            return response.status(200).json({ winners: listOfWinners });
        } catch (error) {
            if (error instanceof Exception) {
                return response.status(400).json({ error: error.message });
            }
            return response.status(500).json({ error: "Internal Server Error" });
        }
    }

    public async removeWinner(request: Request, response: Response) {
        try {
            const { winnerId } = request.params;
            await this.removeWinnerUseCase.execute({ winnerId });
            return response.status(201).json({ message: "Removed winner successfully!" });
        } catch (error) {
            if (error instanceof Exception) {
                return response.status(400).json({ error: error.message });
            }
            return response.status(500).json({ error: "Internal Server Error" });
        }
    }
}