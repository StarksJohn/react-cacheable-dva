export interface getCacheInterface {
    (key: string): Promise<string | undefined>;
}

export interface cacheInterface {
    (key: string, value: string): void;
}
export interface awaitSaveSomeThing {
    // @ts-ignore
    awaitSaveSomeThing?({ actions: string }):any,
}
export interface modelProps extends awaitSaveSomeThing {
    namespace:string,
    state:object,
    attributesToBeCached?:string[]|undefined, // Array of string type
    getCache?:getCacheInterface,
    cacheFunc?:cacheInterface,
    isCompleteInitCache:boolean,//当前model的缓存是否初始化完毕 Whether the cache of the current model is initialized
    [propName: string]: any;// Arbitrary attribute
}

export interface saveSomeThingParams1{
    action: string,
    payload: {},
    callback(): void
}

export interface putParams {
    type: string,
    payload: object
}
export interface saveSomeThingParams2 {
    put(p: putParams): void,

    call(): void,

    select(): void
}

export interface dvaDispatchProps{
    type: string, // 要触发的effect,具体model的effects.(saveSomeThing|awaitSaveSomeThing)
    action: string, // 具体model的action.xxx
    payload: object, // 要更新的数据 {[`${action}`]: xxx}
    callback: Function//
}

export interface createDefaultProps extends awaitSaveSomeThing{
    namespace: string,
    attributesToBeCached: string[],
    getCache?: getCacheInterface,
    cacheFunc?: cacheInterface
}

export interface cacheAnAttributeOfInitStateProps {
    key: string
    value: any
    attributesToBeCached: string[],
    cacheFunc?: cacheInterface
}
