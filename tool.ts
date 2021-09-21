// @ts-ignore
import _ from 'lodash'
import dva from './dva'

export interface cacheAnAttributeOfInitStateProps {
    key: string
    value: any
    attributesToBeCached: string[]
}

// @ts-ignore
// @ts-ignore
export default {
  /**
     * https://www.cnblogs.com/chrissong/p/10841760.html
     * 避免 try catch  后去 err
     * @param promise
     * @returns {*|Promise<T | any[]>}
     */
  to: (promise: Promise<any>) => {
    return promise
      .then((res) => {
        return [null, res]
      })
      .catch((err) => {
        return [err]
      })
  },

  // 换算显示的 xxx 万
  tenThousandConversion: (n: number, unitStr: any /* 超过10000后最后显示的单位 */) => {
    if (n >= 10000) {
      n = Math.round((n / 10000) * 100) / 100
      n = n + unitStr
    }
    return n
  },

  /**
     *
     * @param old
     * @param now
     * @param keys :比较全部属性: Object.keys(old) 或  比较某个属性 :['memberList']
     * @returns {boolean}
     */
  shouldUpdate: (old: { [x: string]: any }, now: { [x: string]: any }, keys: { [x: string]: any }) => {
    const isEmpty = (object: object | null) => {
      if (object === null) {
        return true
      } else {
        switch (typeof object) {
          case 'undefined': {
            return true
          }
          case 'string': {
            return object === ''
          }
          case 'object': {
            for (const key in object) {
              return false
            }
            return true
          }
          default: {
            return false
          }
        }
      }
    }
    if (!isEmpty(keys)) {
      for (const i in keys) {
        const key = keys[i]
        const oldValue = old[key]
        const nowValue = now[key]
        if (typeof oldValue !== 'function' && typeof nowValue !== 'function') {
          try {
            if (JSON.stringify(oldValue) !== JSON.stringify(nowValue)) {
              return true
            }
          } catch (e) {
          }
        }
      }
    }
    return false
  },

  /**
     * 缓存 initState 的某个属性,如果这个属性再 attributesToBeCached 里注册了的话
     * @param key
     */
  cacheAnAttributeOfInitState: ({ key, value, attributesToBeCached }: cacheAnAttributeOfInitStateProps) => {
    const index = _.indexOf(attributesToBeCached, key)
    if (index !== -1) {
      console.log('tool.js 开始缓存 initState.', key, ' 的值=', value)
      // asyncStorage.setItem(key, value).then()
    }
  },

  /**
     * Dispatch anywhere outside the Component
     * 在 Component 外 的任何地方 发 dispatch
     * @param p
     */
  dispatchAnyWhere: (p: {
        type: string, // effect: string
        action: string,
        payload: object,
        callback?: Function,
    }) => {
    return dva.getDispatch(p)
  },
  getStore: () => {
    return dva.getStore()
  }
}