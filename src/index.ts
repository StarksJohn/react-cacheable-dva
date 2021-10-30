import dva from './dva'
import baseModel from './baseModel'
import models from './models'
import { modelProps as _modelProps } from './modelProps'
import dvaApp from './dvaApp'
import tool, { cacheAnAttributeOfInitStateProps ,getCacheInterface,cacheInterface} from './tool'

export interface modelProps extends _modelProps{
}

export {
  dva, baseModel, models, dvaApp, tool, cacheAnAttributeOfInitStateProps,getCacheInterface,cacheInterface
}
