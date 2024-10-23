import { IWinner } from "../../infrastructure/persistence/models/mongoose/WinnerModel";
import Winner from "../entity/Winner";

export default interface WinnerRepository {
    create(winner: Winner): Promise<void> | void;
    all(): Promise<Winner[]> | Winner[] | [];
    delete(winnerId: string): Promise<void> | void;
}