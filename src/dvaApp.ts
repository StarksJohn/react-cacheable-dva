import dva from './dva'
import models from './models'
import {modelProps, getCacheInterface, cacheInterface} from './modelProps'

/**
 * 初始化dva 模块
 */
export default (modelList: modelProps[], getCache: getCacheInterface, cacheFunc: cacheInterface) => {
    console.log('react-cacheable-dva dvaApp.ts getCache=', getCache, ' cacheFunc=', cacheFunc)
    return dva.createApp({
        models: models(modelList, getCache, cacheFunc),
        enableLog: false
    })
}
