import dva from './dva'
import baseModel from './baseModel'
import models from './models'
import { modelProps as _modelProps } from './modelProps'
import dvaApp from './dvaApp'
import tool from './tool'

export interface modelProps extends _modelProps{
}

export {
  dva, baseModel, models, dvaApp,tool
}
