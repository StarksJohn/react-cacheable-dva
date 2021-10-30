export interface getCacheInterface {
    (key: string): Promise<string | undefined>;
}

export interface cacheInterface {
    (key: string, value: string): void;
}
export interface modelProps {
    namespace:string,
    state:object,
    attributesToBeCached?:string[]|undefined, // Array of string type
    getCache?:getCacheInterface,
    cacheFunc?:cacheInterface,
    [propName: string]: any;// Arbitrary attribute
}
