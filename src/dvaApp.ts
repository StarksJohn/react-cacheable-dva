import dva from './dva'
import models from './models'
import {modelProps} from './modelProps'
import tool, {getCacheInterface,cacheInterface} from './tool'

/**
 * 初始化dva 模块
 */
export default (modelList: modelProps[], getCache: getCacheInterface,cacheFunc:cacheInterface) => {
    tool.getCache = getCache
    tool.cacheFunc=cacheFunc
    return dva.createApp({
        models: models(modelList),
        enableLog: false
    })
}
