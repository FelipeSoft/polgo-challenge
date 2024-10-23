import HttpServerAdapter, { Method, Route } from "../../../domain/entity/HttpServerAdapter";
import e, { urlencoded } from "express";
import * as bodyparser from "body-parser";
import cors from "cors";

export default class ExpressAdapter implements HttpServerAdapter {
    private readonly app = e();

    public constructor(
        private readonly routes: Route[]
    ) { }

    public mapRoutes(): void {
        for (const route of this.routes) {
            const httpMethod = route.method.toLowerCase() as Method;
            const endpoint = route.endpoint;
            const currentAction = route.action;
            this.app[httpMethod](endpoint, currentAction);
            console.log(`[Mapped] ${httpMethod.toUpperCase()} ${endpoint}`);
        }
    }

    public middleware(): void {
        const allowedOrigins = [process.env.KNOWN_ORIGIN];

        this.app.use(bodyparser.json());
        this.app.use(urlencoded({ extended: true }));
        this.app.use(cors({
            origin: (origin, callback) => {
                if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                    callback(null, true);
                } else {
                    callback(new Error("Not allowed by CORS"));
                }
            }
        }));
    }

    public listen(port: number): void {
        this.app.listen(port, () => console.log(`Express server listening on port ${port} 👻`));
    }
} 