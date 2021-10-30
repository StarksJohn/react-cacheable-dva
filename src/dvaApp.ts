import dva from './dva'
import models from './models'
import {modelProps} from './modelProps'
import tool, {getCacheInterface} from './tool'

/**
 * 初始化dva 模块
 */
export default (modelList: modelProps[], getCache: getCacheInterface) => {
    tool.getCache = getCache
    return dva.createApp({
        models: models(modelList),
        enableLog: false
    })
}
