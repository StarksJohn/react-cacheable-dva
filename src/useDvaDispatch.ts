import {
  useCallback
} from 'react'
import { useDispatch } from 'react-redux'
import { dvaDispatchProps } from './modelProps'

/**
 * baseModel.ts 里的 baseEffects 里的 saveSomeThing | awaitSaveSomeThing 以后都由 dvaDispatch 方法触发
 * import { useDvaDispatch } from '~dva'
 * const { dvaDispatch } = useDvaDispatch()
 */
export default () => {
  const dispatch = useDispatch()
  // const { type, action, payload, callback } = Props

  const dvaDispatch = useCallback(
    ({ type, action, payload, callback }: dvaDispatchProps) => {
      console.log('useDvaDispatch.js  type=', type, ' action=', action, ' payload=', payload, ' callback=', callback)

      return dispatch({
        type, // 对应bannerModel里的某个effect
        action, // 对应某个reducer
        payload,
        callback
      })
    },
    []
  )

  return { dvaDispatch }
}
