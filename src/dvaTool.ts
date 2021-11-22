import dva from './dva'

// @ts-ignore
export default {
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
    },

}
