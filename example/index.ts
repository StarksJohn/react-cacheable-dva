/**
 * 这个目录下的文件可以放在自己项目创建的一个dva目录下
 * Files in this directory can be placed in the dva directory in your own project
 */
import { DefaultRootState } from 'react-redux'
import _useDvaDispatch from './useDvaDispatch'
/**
 * 此文件被导入的方式
 * How this file was imported
 * import {  } from '~dva';
 */
// import { dvaApp as _dv } from 'react-cacheable-dva'
// import _userModel from './userModel'
export const useDvaDispatch = _useDvaDispatch
// export const initDva = () => {
//   console.log('dva initDva() ')
//   return _dv([],(key:string) => {
//       console.log('initDva getCache key=', key)
//       return
//   }, (key:string, value:string) => {
//       console.log('initDva cacheFunc key=', key, ' value=', value)
//   })
// }
// export const dvaApp = initDva()
export interface dvaState extends DefaultRootState{
}


