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
        type, // 对应具体里的某个effect Corresponding to a specific effect
        action, // 对应某个 reducer Corresponding to a reducer in the specific
        payload,
        callback
      })
    },
    []
  )

  return { dvaDispatch }
}
