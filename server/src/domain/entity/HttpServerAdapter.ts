export default interface HttpServerAdapter {
    mapRoutes(): void;
    middleware(): void;
    listen(port: number): void;
}

export type Route = {
    method: Method;
    endpoint: string,
    action: any;
}

export type Method = "get" | "post" | "delete";