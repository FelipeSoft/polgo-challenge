import { Route } from "../../domain/entity/HttpServerAdapter";
import { winnerController } from "../modules/WinnerModule";

export const WinnerRoutes: Route[] = [
    { method: "get", endpoint: "/winner/all", action: winnerController.allWinners.bind(winnerController) },
    { method: "post", endpoint: "/winner/create", action: winnerController.createWinner.bind(winnerController) },
    { method: "delete", endpoint: "/winner/remove/:winnerId", action: winnerController.removeWinner.bind(winnerController) }
]