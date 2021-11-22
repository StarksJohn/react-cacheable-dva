/**
 * 这个目录下的文件可以放在自己项目创建的一个dva目录下
 * Files in this directory can be placed in the dva directory in your own project
 */
import {DefaultRootState} from 'react-redux'
//Uncomment when using
// import { dvaApp as _dvaApp ,useDvaDispatch as _useDvaDispatch } from 'react-cacheable-dva'
//Add comments when using
import _dvaApp from '../src/dvaApp'
// @ts-ignore
import _userModel,{userModeProps} from './userModel'

/**
 * 此文件被导入的方式
 * How this file was imported
 * import {  } from '~dva';
 */
export const userModel = _userModel

const initDva = () => {
    console.log('dva initDva() ')
    return _dvaApp([userModel],
        // @ts-ignore
        (key: string) => {
            console.log('initDva getCache key=', key)
            // return globalData.get(key, true) 小程序的缓存方式,其他平台改成自己的缓存方式
        }, (key: string, value: string) => {
            console.log('initDva cacheFunc key=', key, ' value=', value)
            // globalData.set(key, value, true) 小程序的缓存方式,其他平台改成自己的缓存方式
        })
}

/**
 * import { dvaState } from '~dva'
 * const {  } = useSelector((state: dvaState) => state.userModel)
 */
export interface dvaState extends DefaultRootState {
    userModel:userModeProps
}

export const dvaApp = initDva()



