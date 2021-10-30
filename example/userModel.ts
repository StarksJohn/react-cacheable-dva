// import { baseModel } from 'react-cacheable-dva'
import baseModel from '../src/baseModel'

const userModel = 'userModel'
const initState = {
  access_token: '',
  member_id: ''
}

/**
 * 由外部控件 dispatch 触发,effects里的值 对应 外部控件dispatch里传的 type,到 当前Model的 effects 里响应
 * Triggered by the dispatch of the external control, the value in effects corresponds to the type passed in the dispatch of the external control, and responds to the effects of the current Model
 * @type {{awaitSaveSomeThing: string, saveSomeThing: string}}
 */
const effects = {
  /**
   * The current model synchronously directly changes the effect of an attribute in the model's initState. This effect can only be dispatched by an external control, and the receiving place is in modelTools.js
   * 当前model同步的直接改变此 model 的initState里的某个属性 的 effect,此effect只能由外部某个控件dispatch,接收的地方在 modelTools.js 里
   */
  saveSomeThing: `userModel/${baseModel.baseEffects.saveSomeThing}`,
  /**
   * The current model asynchronously obtains api data && change state
   * 当前model异步获取api数据&&改变state
   */
  awaitSaveSomeThing: `userModel/${baseModel.baseEffects.awaitSaveSomeThing}` //
}

/**
 * 触发当前Model的 reducer
 * Trigger the reducer of the current Model
 * @type {{awaitSaveSomeThing: string, campaign_banner: string, saveSomeThing: string}}
 */
const action = {
  ...baseModel.baseAction,
  /**
   * Change the action of access_token in initState
   * 改变 initState里的 access_token 的 action
   */
  access_token: 'access_token' //
}

/**
 * https://dvajs.com/api/#model
 被注入到你自己项目的 dva/index.ts的 initDva方法里
 Is injected into the initDva method of dva/index.ts of your own project
 */
export default {
  namespace: userModel,
  state: initState,
  /**
   * The key of the data that the current model needs to be cached
   * 当前model需要被缓存的数据的key
   */
  attributesToBeCached: [
    'access_token'
  ],
  effects,
  reducers: {},
  action
}
