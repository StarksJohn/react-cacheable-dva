import dva from './dva'

export interface cacheAnAttributeOfInitStateProps {
    key: string
    value: any
    attributesToBeCached: string[]
}

export interface getCacheInterface {
    (key: string): Promise<string | undefined>;
}

export interface cacheInterface {
    (key: string, value: string): void;
}

var getCache: getCacheInterface = (key: string) => {
    return new Promise((resolve) => {
        console.log('react-cacheable-dva tool.ts getCache')
        resolve(key)
    })
}
var cacheFunc: cacheInterface = (key: string, value: string) => {
    console.log('react-cacheable-dva tool.ts cacheFunc key=', key, ' value=', value)
}


// @ts-ignore
export default {

    /**
     * 缓存 initState 的某个属性,如果这个属性再 attributesToBeCached 里注册了的话
     * @param key
     */
    // cacheAnAttributeOfInitState: ({ key, value, attributesToBeCached }: cacheAnAttributeOfInitStateProps) => {
    //   // const index = _.indexOf(attributesToBeCached, key)
    //   // if (index !== -1) {
    //   //   console.log('tool.js 开始缓存 initState.', key, ' 的值=', value)
    //   //   // asyncStorage.setItem(key, value).then()
    //   // }
    // },

    /**
     * Dispatch anywhere outside the Component
     * 在 Component 外 的任何地方 发 dispatch
     * @param p
     */
    dispatchAnyWhere: (p: {
        type: string, // effect: string
        action: string,
        payload: object,
        callback?: Function,
    }) => {
        return dva.getDispatch(p)
    },
    getStore: () => {
        return dva.getStore()
    }, getCache, cacheFunc

}
