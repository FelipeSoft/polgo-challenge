import { configDotenv } from "dotenv";
import ExpressAdapter from "../adapters/express/ExpressAdapter";
import makeConnectionWithMongoDB from "../database/MongoDB";
import { WinnerRoutes } from "../routes/WinnerRoutes";

async function init() {
    configDotenv();
    makeConnectionWithMongoDB();

    const routes = WinnerRoutes;
    const adapter = new ExpressAdapter(routes);

    adapter.middleware();
    adapter.mapRoutes();
    adapter.listen(Number(process.env.PORT) || 8080);
}

init();