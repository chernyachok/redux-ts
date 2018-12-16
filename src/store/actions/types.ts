export interface DataObj {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export interface IncomingUsers {
    status: number;
    statusText: string;
    data: Array<DataObj>;
    headers?: object;
    request?: object;  
}