import { Video } from './types';
export declare class DB {
    private readonly storeName;
    private readonly dbPromise;
    constructor({ name, version, storeName }?: {
        name: string;
        version: number;
        storeName: string;
    });
    find(id: IDBValidKey): Promise<Video | undefined>;
    insert(id: IDBValidKey, data: Video): Promise<void>;
    delete(id: IDBValidKey): Promise<void>;
}
