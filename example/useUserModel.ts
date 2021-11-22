import  {
    useCallback,
} from 'react';
//Uncomment when using
// import { useDvaDispatch } from 'react-cacheable-dva'
//Add comments when using
import useDvaDispatch from '../src/useDvaDispatch'
// @ts-ignore
import userModel from './userModel'


export default () => {
    const {dvaDispatch} = useDvaDispatch()

    // 请求 数据
    const loadData = useCallback(
        () => {
            console.log('useUserModel.ts loadData')

            return dvaDispatch({
                type: userModel.effects.awaitSaveSomeThing,
                action: userModel.action.access_token,
                payload: {},
                callback: () => {
                    console.log('useUserModel.tsx loadData 完毕')
                }
            })
        },
        [dvaDispatch]
    )

    return {loadData};
};
