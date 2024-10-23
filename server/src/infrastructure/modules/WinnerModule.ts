import CreateNewWinner from "../../application/usecases/Winner/CreateNewWinner";
import ListAllWinners from "../../application/usecases/Winner/ListAllWinners";
import RemoveWinner from "../../application/usecases/Winner/RemoveWinner";
import WinnerController from "../adapters/express/controllers/WinnerController";
import WinnerRepositoryMongoDB from "../persistence/repository/WinnerRepositoryMongoDB";

export const winnerController = new WinnerController(
    new ListAllWinners(new WinnerRepositoryMongoDB()),
    new CreateNewWinner(new WinnerRepositoryMongoDB),
    new RemoveWinner(new WinnerRepositoryMongoDB())
);